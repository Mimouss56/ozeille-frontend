import React, { useState } from "react";
import { Link } from "react-router";

import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { Label } from "../../components/Label/Label";
import { Navigation } from "../../components/Navigation/public/Navigation";
import { forgotPasswordSchema } from "../../cores/schemas/authSchema";
import { PATHS } from "../../shared/constants/path";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (value: string) => {
    setEmail(value);
    if (errors.email) {
      setErrors({});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = forgotPasswordSchema.safeParse({ email });

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
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex flex-1 items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Mot de passe oublié</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="form-control w-full [&_input]:w-full">
              <Label>Email</Label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="enter your email address"
                required
                style={errors.email ? "error" : "neutral"}
                helperText={errors.email}
              />
            </div>

            <div className="mt-4 flex w-full flex-col gap-3">
              <Button type="submit" style="primary">
                Confirmer
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
