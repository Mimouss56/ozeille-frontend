import { Link } from "react-router";
import { Button } from "../../components/Button/Button";
import { Label } from "../../components/Label/Label";
import { PATHS } from "../../shared/constants/path";
import { useRegister } from "./useRegister";
import { PasswordToggle } from "../../components/PasswordToggle/PasswordToggle";
import { Navigation } from "../../components/Navigation/public/Navigation";
import { InputField } from "../../components/InputField/InputField";

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
    onSubmit 
  } = useRegister();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
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
            

            <div className="w-full mt-6 [&_button]:w-full [&_button]:flex! [&_button]:items-center! [&_button]:justify-center! [&_button]:h-12!">
              <Button type="submit" style="primary" disabled={loading}>
                {loading ? "Creating account..." : "Sign up"}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600 mt-2">
              Already have an account ? {""}
              <Link 
                to={PATHS.PUBLIC.LOGIN.PATH} 
                className="font-medium text-error hover:underline"
              >
                Login here.
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}