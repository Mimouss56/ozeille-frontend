import { Link } from "react-router";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import { Label } from "../../components/Label/Label";
import { PATHS } from "../../shared/constants/path";
import { Navigation } from "../../layouts/MainLayout/Navigation";
import { useLogin } from "./useLogin";
import { PasswordToggle } from "../../components/PasswordToggle/PasswordToggle";

export const LoginPage = () => {
    const { 
        formData, 
        errors, 
        confirmationError, 
        loading, 
        showPassword, 
        handleChange, 
        togglePasswordVisibility, 
        onSubmit 
    } = useLogin();

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1 flex items-center justify-center p-4 pt-20">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-900">Login</h1>
                    </div>

                    <form onSubmit={onSubmit} className="flex flex-col gap-6">
                        {confirmationError && (
                            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-md">
                                {confirmationError}
                            </div>
                        )}
                        <div className="form-control w-full [&_input]:w-full">
                            <Label>Email</Label>
                            <InputText
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

                        <div className="form-control w-full [&_input]:w-full relative">
                            <Label>Password</Label>
                            <div className="relative w-full">
                                <InputText
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={(val) => handleChange("password", val)}
                                    placeholder="Entrez votre mot de passe..."
                                    required
                                    style={errors.password ? "error" : "neutral"}
                                    helperText={errors.password}
                                />
                                <PasswordToggle 
                                    isVisible={showPassword} 
                                    onToggle={togglePasswordVisibility} 
                                />
                            </div>
                        </div>
                        <div className="text-center -mt-2">
                            <Link 
                                to={PATHS.PUBLIC.FORGOT_PASSWORD.PATH} 
                                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                            >
                                Forgot password ?
                            </Link>
                        </div>

                        <div className="w-full [&_button]:w-full [&_button]:flex! [&_button]:items-center! [&_button]:justify-center! [&_button]:h-12!">
                            <Button type="submit" style="primary" disabled={loading}>
                                {loading ? "Loading..." : "Login"}
                            </Button>
                        </div>

                        <div className="text-center text-sm text-gray-600 mt-2">
                            Don&apos;t have an account ? {""}
                            <Link 
                                to={PATHS.PUBLIC.REGISTER.PATH} 
                                className="font-medium text-error hover:underline"
                            >
                                Sign up here.
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}