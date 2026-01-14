import { useAuthStore } from "../../store/auth.store";

export const useProfile = () => {
  const { user } = useAuthStore();

  const userInitials = user 
    ? `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase() 
    : "--";

  const fullName = user ? `${user.firstName} ${user.lastName}` : "";

  const displayData = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
  };

  return {
    displayData,
    userInitials,
    fullName,
  };
};