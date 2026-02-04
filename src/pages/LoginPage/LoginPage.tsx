import { Link } from "react-router";

import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import { PasswordToggle } from "../../components/PasswordToggle/PasswordToggle";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { PATHS } from "../../shared/constants/path";
import { useLogin } from "./useLogin";

export const LoginPage = () => {
  const {
    formData,
    errors,
    confirmationError,
    loading,
    showPassword,
    handleChange,
    togglePasswordVisibility,
    onSubmit,
  } = useLogin();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h1 className="text-neutral text-4xl font-bold">Connexion</h1>
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
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(val) => handleChange("email", val)}
                placeholder="Entrez votre adresse email..."
                style={errors.email ? "error" : "neutral"}
                helperText={errors.email}
                required
              />
            </div>

            <div className="form-control relative w-full [&_input]:w-full">
              <div className="relative w-full">
                <InputField
                  label="Password"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(val) => handleChange("password", val)}
                  placeholder="Entrez votre mot de passe..."
                  style={errors.password ? "error" : "neutral"}
                  helperText={errors.password}
                  required
                />
                <PasswordToggle isVisible={showPassword} onToggle={togglePasswordVisibility} />
              </div>
            </div>
            <div className="-mt-2 text-center">
              <Link
                to={PATHS.PUBLIC.FORGOT_PASSWORD.PATH}
                className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Mot de passe oublié ?
              </Link>
            </div>

            <div className="w-full [&_button]:flex! [&_button]:h-12! [&_button]:w-full [&_button]:items-center! [&_button]:justify-center!">
              <Button type="submit" style="primary" disabled={loading}>
                {loading ? "Connexion..." : "Connexion"}
              </Button>
            </div>

            <div className="mt-2 text-center text-sm text-gray-600">
              Vous n&apos;avez pas encore de compte ?{" "}
              <Link to={PATHS.PUBLIC.REGISTER.PATH} className="text-error font-medium hover:underline">
                Inscrivez-vous ici.
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
