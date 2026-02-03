import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";

import { Button } from "../../components/Button/Button.tsx";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { PATHS } from "../../shared/constants/path.ts";
import { useAuthStore } from "../../store/auth.store";

export function ConfirmEmailPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { confirmEmail, isPending, isError, isConfirmed } = useAuthStore();

  useEffect(() => {
    if (!token) return;
    confirmEmail(token);
  }, [confirmEmail, token]);

  let message = "";
  if (isPending()) {
    message = "Validation en cours...";
  } else if (isConfirmed()) {
    message = "Votre email a bien été confirmé !";
  } else if (isError()) {
    message = "Le lien de confirmation n'est plus valide. Veuillez refaire votre demande de confirmation.";
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white text-gray-900 antialiased">
      <StatusMessage layout="box">{message}</StatusMessage>
      {isConfirmed() && (
        <Link to={PATHS.PUBLIC.LOGIN.PATH} className="flex flex-col">
          <Button type="button">Se connecter</Button>
        </Link>
      )}
      {isError() && (
        <Link to={PATHS.PUBLIC.SEND_CONFIRM_EMAIL.PATH} className="flex flex-col">
          <Button type="button">Renvoyer le mail de confirmation</Button>
        </Link>
      )}
    </div>
  );
}
