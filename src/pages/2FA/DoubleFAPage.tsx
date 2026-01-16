import { Link } from "react-router";

import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import { Navigation } from "../../components/Navigation/public/Navigation";
import { PATHS } from "../../shared/constants/path";
import { useTwoFA } from "./hook";

export const TwoFAPage = () => {
  const { formData, errors, confirmationError, loading, handleChange, onSubmit } = useTwoFA();

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Double Authentification</h1>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            {confirmationError && (
              <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {confirmationError}
              </div>
            )}
            <div className="form-control w-full [&_input]:w-full">
              <InputField
                label="2fa"
                id="2fa"
                name="token"
                type="text"
                value={formData.token}
                onChange={(val) => handleChange("token", val)}
                placeholder="Code 2FA reçu par email"
                style={errors.email ? "error" : "neutral"}
                helperText={errors.email}
                required
              />
            </div>

            <div className="w-full [&_button]:flex! [&_button]:h-12! [&_button]:w-full [&_button]:items-center! [&_button]:justify-center!">
              <Button type="submit" style="primary" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </Button>
            </div>

            <div className="mt-2 text-center text-sm text-gray-600">
              Don&apos;t have an account ? {""}
              <Link to={PATHS.PUBLIC.REGISTER.PATH} className="text-error font-medium hover:underline">
                Sign up here.
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
