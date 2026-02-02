import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { forgotPasswordSchema } from "../../cores/schemas/authSchema.ts";
import { useAuthStore } from "../../store/auth.store.ts";
import { formatZodErrors } from "../../utils/zodValidationError.ts";

export const useConfirmation = () => {
  const { sendConfirmationEmail, confirmationError, isPending, isError, isConfirmed, confirmationStatus } =
    useAuthStore();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    if (isConfirmed()) {
      toast.success("Email envoyé avec succès ! Vérifiez votre boîte mail.");
    }
  }, [isConfirmed, confirmationStatus]);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = forgotPasswordSchema.safeParse({ email });

    if (!result.success) {
      setErrors(formatZodErrors(result.error));
      return;
    }
    await sendConfirmationEmail(email);
  };

  return {
    handleEmailChange,
    email,
    errors,
    onSubmit,
    isPending,
    isError,
    confirmationError,
    isConfirmed,
  };
};
