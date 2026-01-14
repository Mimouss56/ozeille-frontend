import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Routes, Route } from "react-router"; 
import { ProfilePage } from "./ProfilePage";
import { PATHS } from "../../shared/constants/path";
import type { UserEntity } from "../../@types/user";
import { useEffect } from "react";
import { useAuthStore } from "../../store/auth.store";
import { PrivateLayout } from "../../layouts/PrivateLayout/PrivateLayout";

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