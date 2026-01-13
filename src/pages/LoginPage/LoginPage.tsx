import React, { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeSlash } from "phosphor-react";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import { Label } from "../../components/Label/Label";
import { PATHS } from "../../shared/constants/path";
import { Navigation } from "../../layouts/MainLayout/Navigation";
import { loginSchema, type LoginData } from "../../cores/schemas/authSchema";

export const LoginPage = () => {
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: keyof LoginData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = loginSchema.safeParse(formData);

        if (!result.success) {
            const newErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                if (issue.path[0]) {
                    newErrors[issue.path[0] as string] = issue.message;
                }
            });
            setErrors(newErrors);
            return;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1 flex items-center justify-center p-4 pt-20">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-900">Login</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-0 h-10 flex items-center text-gray-500 hover:text-gray-700 z-10 p-1"
                                >
                                    {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
                                </button>
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

                        <div className="flex flex-col gap-3 mt-2 w-full">
                            <div className="w-full [&_button]:w-full">
                                <Button type="submit" style="primary">
                                    Login
                                </Button>
                            </div>
                        </div>

                        <div className="text-center text-sm text-gray-600 mt-2">
                            Don't have an account ? {""}
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