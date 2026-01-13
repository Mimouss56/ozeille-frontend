import { Navigate, Route, Routes } from "react-router";

import { AppLayout } from "../layouts/SidePanel/AppLayout";
import { PATHS } from "../shared/constants/path";

export const AppRouter = () => {
  return (
    <Routes>
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
      {Object.values(PATHS.ERROR)
        .filter((item) => !!item.COMPONENT)
        .map((item) => (
          <Route key={item.PATH} path={item.PATH} element={<item.COMPONENT />} />
        ))}
      <Route path="*" element={<Navigate to={PATHS.PUBLIC.HOME.PATH} replace />} />
    </Routes>
  );
};
