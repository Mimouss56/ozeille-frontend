import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { type LoginData, loginSchema } from "../../cores/schemas/authSchema";
import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";
import { formatZodErrors } from "../../utils/zodValidationError";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login, loading, confirmationError, confirmationStatus, isAuthenticated, fetchMe } = useAuthStore();

  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [showPassword, setShowPassword] = useState(false);

  // Verify token with backend and redirect if valid
  useEffect(() => {
    const verifyToken = async () => {
      const token = sessionStorage.getItem("access_token");
      if (!token) return;

      const response = await fetchMe();
      if (response?.me) {
        navigate(PATHS.PRIVATE.TRANSACTIONS.PATH, { replace: true });
      }
    };

    verifyToken();
  }, [fetchMe, navigate]);

  // Redirect if already authenticated (after login elsewhere)
  useEffect(() => {
    if (isAuthenticated) {
      navigate(PATHS.PRIVATE.TRANSACTIONS.PATH, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (field: keyof LoginData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      setErrors(formatZodErrors(result.error));
      return;
    }

    const response = await login(formData);

    if (response?.tempToken) {
      sessionStorage.setItem("tmp_token", response.tempToken);
      navigate(PATHS.PUBLIC.TWO_FA.PATH);
    }
  };

  return {
    formData,
    errors,
    confirmationError,
    confirmationStatus,
    loading,
    showPassword,
    handleChange,
    togglePasswordVisibility,
    onSubmit,
  };
};
