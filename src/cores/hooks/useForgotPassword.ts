import { useState } from "react";
import { useAuthStore } from "../../store/auth.store";
import { forgotPasswordSchema } from "../schemas/authSchema";
import { extractAxiosErrorMsg } from "../../utils/axiosClient";

export const useForgotPassword = () => {
  const { forgotPassword, loading } = useAuthStore();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (value: string) => {
    setEmail(value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
    if (apiError) setApiError(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = forgotPasswordSchema.safeParse({ email });

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          newErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    try {
      await forgotPassword(email);
      setIsSuccess(true);
    } 
    catch (error) {
      setApiError(extractAxiosErrorMsg(error));
    }
  };

  return {
    email,
    errors,
    apiError,
    isSuccess,
    loading,
    handleChange,
    onSubmit,
  };
};