import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";

import { ConfirmationStatusEnum, type ResetPasswordData } from "../../@types/auth.d";
import { resetPasswordSchema } from "../../cores/schemas/authSchema";
import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";
import { formatZodErrors } from "../../utils/zodValidationError";

export const useResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Récupérer le token dans l'url reçue par mail
  const token = searchParams.get("token");

  const { resetPassword, loading, confirmationError, confirmationStatus, resetConfirmationState } = useAuthStore();

  const [formData, setFormData] = useState<ResetPasswordData>({
    password: "",
    confirmedPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (confirmationStatus === ConfirmationStatusEnum.Success) {
      toast.success("Votre mot de passe a été réinitialisé avec succès !");
      navigate(PATHS.PUBLIC.LOGIN.PATH);
    }
  }, [confirmationStatus, navigate]);

  useEffect(() => {
    return () => {
      resetConfirmationState();
    };
  }, [resetConfirmationState]);

  const handleChange = (field: keyof ResetPasswordData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validation du token
    if (!token) {
      toast.error("Jeton de réinitialisation manquant ou invalide.");
      return;
    }
    // Validation zod
    const result = resetPasswordSchema.safeParse(formData);
    if (!result.success) {
      setErrors(formatZodErrors(result.error));
      return;
    }
    // Appel de la méthode resetPassword du store
    await resetPassword(token, formData);
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
