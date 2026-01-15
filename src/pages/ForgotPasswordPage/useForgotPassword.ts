import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/auth.store";
import { forgotPasswordSchema } from "../../cores/schemas/authSchema";
import { ConfirmationStatusEnum } from "../../@types/auth.d";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { PATHS } from "../../shared/constants/path";

export const useForgotPassword = () => {
  const navigate = useNavigate();
  const { 
    forgotPassword, 
    loading, 
    confirmationError, 
    confirmationStatus,
    resetConfirmationState 
  } = useAuthStore();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    if (confirmationStatus === ConfirmationStatusEnum.Success) {
      toast.success("Email envoyé avec succès ! Vérifiez votre boîte mail.");
      navigate(PATHS.PUBLIC.LOGIN.PATH);
    }
  }, [confirmationStatus, navigate]);

  useEffect(() => {
    return () => {
      resetConfirmationState();
    };
  }, [resetConfirmationState]);

  const handleChange = (value: string) => {
    setEmail(value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = forgotPasswordSchema.safeParse({ email });
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

    await forgotPassword(email);
  };

  return {
    email,
    errors,
    confirmationError,
    loading,
    handleChange,
    onSubmit,
  };
};