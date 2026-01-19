import { useState } from "react";
import { useNavigate } from "react-router";

import { type LoginData, loginSchema } from "../../cores/schemas/authSchema";
import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";
import { formatZodErrors } from "../../utils/zodValidationError";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login, loading, confirmationError, confirmationStatus } = useAuthStore();

  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [showPassword, setShowPassword] = useState(false);

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
