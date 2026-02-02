import { Link } from "react-router";

import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField.tsx";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage.tsx";
import { PATHS } from "../../shared/constants/path";
import { useForgotPassword } from "./useForgotPassword";

export const ForgotPasswordPage = () => {
  const { email, errors, confirmationError, loading, handleChange, onSubmit } = useForgotPassword();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Mot de passe oublié</h1>
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
                onChange={handleChange}
                placeholder="Entrez votre adresse email..."
                required
                style={errors.email ? "error" : "neutral"}
                helperText={errors.email}
              />
            </div>
            <div className="mt-4 flex w-full flex-col gap-3">
              <Button type="submit" style="primary" disabled={loading}>
                {loading ? "Envoi..." : "Confirmer"}
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
