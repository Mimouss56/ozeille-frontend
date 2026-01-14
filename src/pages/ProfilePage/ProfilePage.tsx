import { InputField } from "../../components/InputField/InputField";
import { useProfile } from "./useProfile";

export const ProfilePage = () => {
  const { 
    displayData, 
    userInitials, 
    fullName 
  } = useProfile();

  return (
    <div className="flex h-screen overflow-auto">
        <div className="flex-1 w-full max-w-4xl mx-auto p-8 pt-20">         
            <div className="flex items-center gap-6 mb-12">
                <div className="initials placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-24 h-24 flex items-center justify-center">
                        <span className="text-2xl font-bold">{userInitials}</span>
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{fullName}</h1>
            </div>

            <form className="space-y-8">
              <div className="w-full">
                <InputField
                  label="Email"
                  id="email"
                  name="email"
                  value={displayData.email}
                  onChange={() => {}}
                  disabled
                  placeholder="Enter your email address..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="w-full">
                    <InputField
                      label="Nom"
                      id="lastName"
                      name="lastName"
                      value={displayData.lastName}
                      onChange={() => {}}
                      disabled
                      placeholder="Enter your last name..."
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      label="Prénom"
                      id="firstName"
                      name="firstName"
                      value={displayData.firstName}
                      onChange={() => {}}
                      disabled
                      placeholder="Enter your first name..."
                    />
                  </div>
              </div>
            </form>
        </div>
    </div>
  );
};