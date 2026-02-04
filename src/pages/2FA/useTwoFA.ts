import { useState } from "react";
import { useNavigate } from "react-router";

import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";

type TwoFAData = {
  token: string;
};

export const useTwoFA = () => {
  const navigate = useNavigate();
  const { confirm2FA, loading, confirmationError, confirmationStatus } = useAuthStore();

  const [formData, setFormData] = useState<TwoFAData>({
    token: "",
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const handleChange = (field: keyof TwoFAData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await confirm2FA(formData.token);
    navigate(PATHS.PRIVATE.TRANSACTIONS.PATH);
  };

  return {
    formData,
    errors,
    confirmationError,
    confirmationStatus,
    loading,
    handleChange,
    onSubmit,
  };
};
