import { Link } from "react-router";

import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import { PasswordToggle } from "../../components/PasswordToggle/PasswordToggle";
import { PATHS } from "../../shared/constants/path";
import { useRegister } from "./useRegister";

export const RegisterPage = () => {
  const {
    formData,
    errors,
    loading,
    showPassword,
    showConfirmPassword,
    handleChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    onSubmit,
  } = useRegister();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Sign Up</h1>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full">
                <InputField
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(val) => handleChange("firstName", val)}
                  placeholder="John"
                  style={errors.firstName ? "error" : "neutral"}
                  helperText={errors.firstName}
                  required
                />
              </div>
              <div className="w-full">
                <InputField
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(val) => handleChange("lastName", val)}
                  placeholder="Doe"
                  style={errors.lastName ? "error" : "neutral"}
                  helperText={errors.lastName}
                  required
                />
              </div>
            </div>

            <div className="form-control w-full [&_input]:w-full">
              <InputField
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(val) => handleChange("email", val)}
                placeholder="Enter your email address..."
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
                  placeholder="Create a password..."
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
                  label="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmedPassword}
                  onChange={(val) => handleChange("confirmedPassword", val)}
                  placeholder="Confirm your password..."
                  style={errors.confirmedPassword ? "error" : "neutral"}
                  helperText={errors.confirmedPassword}
                  required
                />
                <PasswordToggle isVisible={showConfirmPassword} onToggle={toggleConfirmPasswordVisibility} />
              </div>
            </div>

            <div className="mt-6 w-full [&_button]:flex! [&_button]:h-12! [&_button]:w-full [&_button]:items-center! [&_button]:justify-center!">
              <Button type="submit" style="primary" disabled={loading}>
                {loading ? "Creating account..." : "Sign up"}
              </Button>
            </div>

            <div className="mt-2 text-center text-sm text-gray-600">
              Already have an account ?
              <Link to={PATHS.PUBLIC.LOGIN.PATH} className="text-error font-medium hover:underline">
                Login here.
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
