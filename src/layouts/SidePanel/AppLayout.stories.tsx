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
                {Object.values(PATHS.PRIVATE).map((route) => (
                  <Route 
                    key={route.PATH} 
                    path={route.PATH} 
                    element={ <div >Page : {route.LABEL} </div> } 
                  />
                ))}
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
