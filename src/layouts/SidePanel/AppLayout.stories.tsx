import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import { AppLayout } from "./AppLayout";
import { Routes } from "react-router";
import { PATHS } from "../../shared/constants/path";
import { Route } from "react-router";
import { HomePage } from "../../pages/HomePage/HomePage";

const meta = {
  title: "layouts/AppLayout",
  component: AppLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      localStorage.setItem("token", "12345");

      return (
        <MemoryRouter initialEntries={[PATHS.PRIVATE.DASHBOARD.PATH]}>
           <Routes>
              <Route path={PATHS.PUBLIC.HOME.PATH} element={<HomePage />} />
              <Route element={<Story />}>
                <Route path={PATHS.PRIVATE.DASHBOARD.PATH} element={<div className="p-8">Contenu Dashboard</div>} />
                <Route path={PATHS.PRIVATE.PROFILE.PATH} element={<div className="p-8">Page Profil</div>} />
                <Route path={PATHS.PRIVATE.TRANSACTIONS.PATH} element={<div className="p-8">Mes transactions</div>} />
                <Route path={PATHS.PRIVATE.BUDGETS.PATH} element={<div className="p-8">Mes budgets</div>} />
              </Route>
           </Routes>
        </MemoryRouter>
      );
    },
  ],
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
