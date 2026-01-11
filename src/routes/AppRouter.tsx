import { Navigate, Route, Routes } from "react-router";

import { AppLayout } from "../components/SidePanel/AppLayout";
import { HomePage } from "../pages/HomePage/HomePage";
import { PATHS } from "../shared/constants/path";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {Object.values(PATHS.PUBLIC)
        .filter((item) => !!item.COMPONENT)
        .map((item) => (
          <Route key={item.PATH} path={item.PATH} element={<item.COMPONENT />} />
        ))}
      <Route element={<AppLayout />}>
        {Object.values(PATHS.PRIVATE)
          .filter((item) => !!item.COMPONENT)
          .map((item) => (
            <Route key={item.PATH} path={item.PATH} element={<item.COMPONENT />} />
          ))}
      </Route>

      <Route path="*" element={<Navigate to={PATHS.PUBLIC.HOME.PATH} replace />} />
    </Routes>
  );
};
