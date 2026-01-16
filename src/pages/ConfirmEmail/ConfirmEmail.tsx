import { useEffect } from "react";
import { useSearchParams } from "react-router";

import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { useAuthStore } from "../../store/auth.store";

export function ConfirmEmailPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { confirmEmail, confirmationError, confirmationStatus } = useAuthStore();

  useEffect(() => {
    if (!token) return;
    confirmEmail(token);
  }, [confirmEmail, token]);
  let message = "";
  if (confirmationStatus === "pending") {
    message = "Validation en cours...";
  } else if (confirmationStatus === "success") {
    message = "Votre email a bien été confirmé !";
  } else if (confirmationStatus === "error") {
    message = `${confirmationError}`;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 antialiased">
      <div className="mt-8 w-full max-w-md rounded bg-gray-50 p-6 text-center shadow">
        <StatusMessage layout="box">{message}</StatusMessage>
      </div>
    </div>
  );
}
