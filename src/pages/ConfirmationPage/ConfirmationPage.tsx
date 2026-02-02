import { Link } from "react-router";

import { Button } from "../../components/Button/Button.tsx";
import { InputField } from "../../components/InputField/InputField.tsx";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage.tsx";
import { PATHS } from "../../shared/constants/path.ts";
import { useConfirmation } from "./useConfirmation.ts";

export const ConfirmationPage = () => {
  const { email, errors, handleEmailChange, onSubmit, isPending, confirmationError } = useConfirmation();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900">{PATHS.PUBLIC.SEND_CONFIRM_EMAIL.LABEL}</h1>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            {confirmationError && (
              <div className="flex justify-center">
                <StatusMessage status="error" layout="box">
                  {confirmationError}
                </StatusMessage>
              </div>
            )}
            <div className="form-control w-full [&_input]:w-full">
              <InputField
                id="email"
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Entrez votre adresse email..."
                required
                style={errors.email ? "error" : "neutral"}
                helperText={errors.email}
              />
            </div>
            <div className="mt-4 flex w-full flex-col gap-3">
              <Button type="submit" style="primary" disabled={isPending()}>
                {isPending() ? "Envoi..." : "Confirmer"}
              </Button>

              <Link to={PATHS.PUBLIC.LOGIN.PATH} className="flex flex-col">
                <Button type="button" style="secondary">
                  Annuler
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
