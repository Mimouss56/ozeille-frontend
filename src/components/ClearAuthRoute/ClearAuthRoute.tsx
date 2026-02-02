import { type PropsWithChildren, useEffect } from "react";

import { useAuthStore } from "../../store/auth.store";

/**
 * Wrapper component that clears session tokens when accessing specific routes
 */
export const ClearAuthRoute = ({ children }: PropsWithChildren) => {
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    logout();
  }, [logout]);

  return children;
};
