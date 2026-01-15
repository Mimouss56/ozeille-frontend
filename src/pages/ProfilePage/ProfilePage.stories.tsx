import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import { MemoryRouter, Route, Routes } from "react-router";

import type { UserEntity } from "../../@types/user";
import { PrivateLayout } from "../../layouts/PrivateLayout/PrivateLayout";
import { PATHS } from "../../shared/constants/path";
import { useAuthStore } from "../../store/auth.store";
import { ProfilePage } from "./ProfilePage";

const MOCK_USER: UserEntity = {
  id: "Hello2026",
  email: "hello.world@gmail.com",
  firstName: "Hello",
  lastName: "World",
  createdAt: new Date(),
  updatedAt: new Date(),
  confirmedAt: new Date(),
};

const meta = {
  title: "Pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        useAuthStore.setState({
          user: MOCK_USER,
          isAuthenticated: true,
          loading: false,
        });

        return () => {
          useAuthStore.setState({
            user: null,
            isAuthenticated: false,
          });
        };
      }, []);

      sessionStorage.setItem("access_token", "123");

      return (
        <MemoryRouter initialEntries={[PATHS.PRIVATE.PROFILE.PATH]}>
          <Routes>
            <Route element={<PrivateLayout />}>
              <Route path={PATHS.PRIVATE.PROFILE.PATH} element={<Story />} />
            </Route>
          </Routes>
        </MemoryRouter>
      );
    },
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {};
