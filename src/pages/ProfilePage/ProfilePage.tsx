import { SignOut } from "phosphor-react";
import { useEffect } from "react";

import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import { useAuthStore } from "../../store/auth.store";
import { useProfile } from "./useProfile";

export const ProfilePage = () => {
  const { displayData, userInitials, fullName } = useProfile();
  const { fetchMe, logout } = useAuthStore();

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  return (
    <div className="flex h-screen overflow-auto">
      <div className="mx-auto w-full max-w-4xl flex-1 p-8 pt-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="initials placeholder">
            <div className="bg-neutral text-neutral-content flex h-24 w-24 items-center justify-center rounded-full">
              <span className="text-2xl font-bold">{userInitials}</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-neutral">{fullName}</h1>
        </div>

        <form className="space-y-8">
          <div className="w-full">
            <InputField
              label="Email"
              id="email"
              name="email"
              value={displayData.email}
              disabled
              placeholder="Entrez votre adresse email..."
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="w-full">
              <InputField
                label="Nom"
                id="lastName"
                name="lastName"
                value={displayData.lastName}
                disabled
                placeholder="Entrez votre nom..."
              />
            </div>
            <div className="w-full">
              <InputField
                label="Prénom"
                id="firstName"
                name="firstName"
                value={displayData.firstName}
                disabled
                placeholder="Entrez votre prénom..."
              />
            </div>
          </div>
        </form>

        <div className="mt-10 w-full md:hidden">
          <hr className="border-base-200 mb-6" />
          <Button onClick={logout} style="danger" size="md" icon={SignOut}>
            Se déconnecter
          </Button>
        </div>
      </div>
    </div>
  );
};
