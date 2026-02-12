import { Link } from "react-router";

import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/Form/InputField/InputField";
import { PasswordToggle } from "../../components/Form/PasswordToggle/PasswordToggle";
import { Navigation } from "../../components/Navigation/public/Navigation";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { PATHS } from "../../shared/constants/path";
import { useResetPassword } from "./useResetPassword";

export const ResetPasswordPage = () => {
  const {
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
  } = useResetPassword();

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h1 className="text-neutral text-4xl font-bold">Réinitialisation</h1>
            <p className="mt-2 text-gray-600">Entrez votre nouveau mot de passe</p>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            {/* Affichage des erreurs globales */}
            {confirmationError && (
              <div className="flex justify-center">
                <StatusMessage status="error" layout="box">
                  {confirmationError}
                </StatusMessage>
              </div>
            )}

            <div className="form-control relative w-full [&_input]:w-full">
              <div className="relative w-full">
                <InputField
                  label="Nouveau mot de passe"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(val) => handleChange("password", val)}
                  placeholder="Entrez votre nouveau mot de passe..."
                  style={errors.password ? "error" : "neutral"}
                  helperText={errors.password}
                  required
                />
                <PasswordToggle isVisible={showPassword} onToggle={togglePasswordVisibility} />
              </div>
            </div>

            <div className="form-control relative w-full [&_input]:w-full">
              <div className="relative w-full">
                <InputField
                  label="Confirmer le mot de passe"
                  id="confirmedPassword"
                  name="confirmedPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmedPassword}
                  onChange={(val) => handleChange("confirmedPassword", val)}
                  placeholder="Confirmez votre mot de passe..."
                  style={errors.confirmedPassword ? "error" : "neutral"}
                  helperText={errors.confirmedPassword}
                  required
                />
                <PasswordToggle isVisible={showConfirmPassword} onToggle={toggleConfirmPasswordVisibility} />
              </div>
            </div>

            <Button type="submit" style="primary" disabled={loading}>
              {loading ? "Réinitialisation..." : "Réinitialiser le mot de passe"}
            </Button>

            <div className="mt-2 text-center text-sm text-gray-600">
              Vous souvenez-vous de votre mot de passe ?{" "}
              <Link to={PATHS.PUBLIC.LOGIN.PATH} className="text-error font-medium hover:underline">
                Connectez-vous ici.
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
