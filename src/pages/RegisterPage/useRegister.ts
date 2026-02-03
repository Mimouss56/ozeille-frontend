import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { ConfirmationStatusEnum } from "../../@types/auth.d";
import { type RegisterData, registerSchema } from "../../cores/schemas/authSchema";
import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";
import { formatZodErrors } from "../../utils/zodValidationError";

export const useRegister = () => {
  const navigate = useNavigate();
  const { 
    register, 
    loading, 
    confirmationError, 
    confirmationStatus, 
    resetConfirmationState,
   } = useAuthStore();

  const [formData, setFormData] = useState<RegisterData>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmedPassword: "",
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
      setErrors(formatZodErrors(result.error));
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
