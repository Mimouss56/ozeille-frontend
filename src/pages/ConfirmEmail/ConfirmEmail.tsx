import { type ReactNode, useEffect } from "react";
import { useSearchParams } from "react-router";

import { Navigation } from "../../layouts/MainLayout/Navigation";
import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";

export function ConfirmEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { confirmationStatus, confirmationError, confirmEmail } = useAuthStore();

  useEffect(() => {
    if (!token) return;
    confirmEmail(token);
  }, [confirmEmail, token]);

  const message = getConfirmationMessage(token, confirmationStatus, confirmationError);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 antialiased">
      <Navigation menu={PATHS.HOME} />
      <div className="mt-8 w-full max-w-md rounded bg-gray-50 p-6 text-center shadow">{message}</div>
    </div>
  );
}

function getConfirmationMessage(
  token: string | null,
  confirmationStatus: string,
  confirmationError: string | null,
): ReactNode | null {
  if (!token) {
    return <p className="font-semibold text-red-600">Aucun token fourni dans l'URL.</p>;
  }
  switch (confirmationStatus) {
    case "pending":
      return <p className="text-gray-600">Validation en cours...</p>;
    case "success":
      return <p className="font-semibold text-green-600">Votre email a bien été confirmé !</p>;
    case "error":
      return (
        <p className="font-semibold text-red-600">
          {confirmationError || "La validation a échoué. Le lien est invalide ou expiré."}
        </p>
      );
    default:
      return null;
  }
}
