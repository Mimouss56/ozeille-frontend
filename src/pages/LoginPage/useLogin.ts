import { useState } from "react";
import { useNavigate } from "react-router"; 
import { useAuthStore } from "../../store/auth.store";
import { loginSchema, type LoginData } from "../../cores/schemas/authSchema";
import { PATHS } from "../../shared/constants/path";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login, loading, confirmationError, confirmationStatus } = useAuthStore();

  const [formData, setFormData] = useState<LoginData>({ 
    email: "", 
    password: "" 
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
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path && issue.path.length > 0) {
          newErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(newErrors);
      
      return;
    }

    const response = await login(formData);
      
    if (response?.tempToken) {
      sessionStorage.setItem("access_token", response.tempToken);
      navigate(PATHS.PRIVATE.DASHBOARD.PATH);
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