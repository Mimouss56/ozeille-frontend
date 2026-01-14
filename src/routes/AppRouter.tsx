import { Navigate, Route, Routes } from "react-router";

import { ErrorLayout } from "../layouts/ErrorLayout/ErrorLayout";
import { PrivateLayout } from "../layouts/PrivateLayout/PrivateLayout";
import { PublicLayout } from "../layouts/PublicLayout/PublicLayout";
import { PATHS } from "../shared/constants/path";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {/* Routes Public classique */}
        {Object.values(PATHS.PUBLIC)
          .filter((item) => !!item.COMPONENT)
          .map((item) => (
            <Route key={item.PATH} path={item.PATH} element={<item.COMPONENT />} />
          ))}

        {/* Layout des Error en surcouche de PublicLayout */}
        <Route element={<ErrorLayout />}>
          {Object.values(PATHS.ERROR)
            .filter((item) => !!item.COMPONENT)
            .map((item) => (
              <Route key={item.PATH} path={item.PATH} element={<item.COMPONENT />} />
            ))}
        </Route>
      </Route>
      <Route element={<PrivateLayout />}>
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
