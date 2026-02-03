import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import { MemoryRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";

import { HomePage } from "../../pages/HomePage/HomePage";
import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";
import { PrivateLayout } from "./PrivateLayout";

const meta: Meta<typeof PrivateLayout> = {
  title: "layouts/Private",
  component: PrivateLayout,
  tags: ["autodocs"],
  globals: {
    viewport: {
      value: "desktop",
    },
  },
  decorators: [
    (Story) => {
      sessionStorage.setItem("access_token", "12345");

      useEffect(() => {
        useAuthStore.setState({
          user: {
            id: "test_id",
            email: "test@test.com",
            firstName: "test",
            lastName: "test",
            createdAt: new Date(),
            updatedAt: new Date(),
            confirmedAt: null,
          },
          isAuthenticated: true,
        });
      }, []);

      return (
        <MemoryRouter initialEntries={[PATHS.PRIVATE.DASHBOARD.PATH]}>
          <Routes>
            <Route path={PATHS.PUBLIC.HOME.PATH} element={<HomePage />} />
            <Route element={<Story />}>
              {Object.values(PATHS.PRIVATE).map((route) => (
                <Route key={route.PATH} path={route.PATH} element={<route.COMPONENT />} />
              ))}
            </Route>
          </Routes>
        </MemoryRouter>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  globals: {
    viewport: {
      value: "responsive",
    },
  },
};

export const MobileView: Story = {
  globals: {
    viewport: {
      value: "iphone12",
    },
  },
};
