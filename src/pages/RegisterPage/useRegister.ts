import { useState, useEffect } from "react";
import { useNavigate } from "react-router"; 
import { toast } from "react-toastify";
import { useAuthStore } from "../../store/auth.store";

import { registerSchema, type RegisterData } from "../../cores/schemas/authSchema"; 
import { PATHS } from "../../shared/constants/path";
import { ConfirmationStatusEnum } from "../../@types/auth.d";

export const useRegister = () => {
  const navigate = useNavigate();
  const { 
    register, 
    loading, 
    confirmationError, 
    confirmationStatus, 
    resetConfirmationState 
  } = useAuthStore();

  const [formData, setFormData] = useState<RegisterData>({ 
    email: "", 
    firstName: "",
    lastName: "",
    password: "",
    confirmedPassword: ""
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (confirmationStatus === ConfirmationStatusEnum.Success) {
      toast.success("Compte créé avec succès ! Vous pouvez maintenant vous connecter.");
      navigate(PATHS.PUBLIC.LOGIN.PATH);
    }
  }, [confirmationStatus, navigate]);

  useEffect(() => {
    return () => {
      resetConfirmationState();
    };
  }, [resetConfirmationState]);

  const handleChange = (field: keyof RegisterData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = registerSchema.safeParse(formData);
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

    await register(formData);
  };

  return {
    formData,
    errors,
    confirmationError,
    loading,
    showPassword,
    showConfirmPassword,
    handleChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    onSubmit,
  };
};