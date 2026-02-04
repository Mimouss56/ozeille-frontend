import { Outlet } from "react-router";

import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/public/Navigation";

export function PublicLayout() {
  return (
    <div className="bg-base-100 text-gray-900 antialiased">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
