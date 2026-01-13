import { Navigate, Route, Routes } from "react-router";

import { PublicLayout } from "../layouts/PublicLayout/PublicLayout";
import { AppLayout } from "../layouts/SidePanel/AppLayout";
import { PATHS } from "../shared/constants/path";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {Object.values(PATHS.PUBLIC)
          .filter((item) => !!item.COMPONENT)
          .map((item) => (
            <Route key={item.PATH} path={item.PATH} element={<item.COMPONENT />} />
          ))}
        {/** TODO: @mlp FIX cette route */}
        {Object.values(PATHS.ERROR)
          .filter((item) => !!item.COMPONENT)
          .map((item) => (
            <Route key={item.PATH} path={item.PATH} element={<item.COMPONENT />} />
          ))}
      </Route>
      <Route element={<AppLayout />}>
        {Object.values(PATHS.PRIVATE)
          .filter((item) => !!item.COMPONENT)
          .map((item) => (
            <Route key={item.PATH} path={item.PATH} element={<item.COMPONENT />} />
          ))}
      </Route>

      <Route path="*" element={<Navigate to={PATHS.ERROR.NOT_FOUND.PATH} replace />} />
    </Routes>
  );
};
