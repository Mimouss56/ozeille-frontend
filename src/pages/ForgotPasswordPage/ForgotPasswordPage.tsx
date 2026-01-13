import React, { useState } from "react";
import { Link } from "react-router";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import { Label } from "../../components/Label/Label";
import { PATHS } from "../../shared/constants/path";
import { Navigation } from "../../layouts/MainLayout/Navigation";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Envoi de l'email de récupération à :", email);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          
          <div className="text-center mb-10">
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
                onChange={setEmail}
                placeholder="enter your email address"
                required
              />
            </div>

            <div className="flex flex-col gap-3 mt-4 w-full">
              <Button 
                type="submit" 
                style="primary"
              >
                Confirmer
              </Button>

              <Link to={PATHS.PUBLIC.LOGIN.PATH} className="flex flex-col">
                <Button 
                  type="button" 
                  style="secondary" 
                >
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