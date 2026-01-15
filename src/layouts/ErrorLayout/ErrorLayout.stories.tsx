import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Route, Routes } from "react-router";

import { NotFoundPage } from "../../pages/Error/NotFoundPage/NotFoundPage";
import UnderConstructionPage from "../../pages/Error/UnderConstructPage/UnderConstructionPage";
import { PublicLayout } from "../PublicLayout/PublicLayout";
import { ErrorLayout } from "./ErrorLayout";

const meta: Meta<typeof ErrorLayout> = {
  title: "Layouts/ErrorLayout",
  component: ErrorLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={[context.parameters?.reactRouter?.routePath || "/not-found"]}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route element={<ErrorLayout />}>
              <Route path="/not-found" element={<Story />} />
              <Route path="/under-construction" element={<Story />} />
            </Route>
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ErrorLayout>;

export const NotFound: Story = {
  render: () => <NotFoundPage />,
  parameters: {
    reactRouter: {
      routePath: "/not-found",
    },
  },
};

export const UnderConstruction: Story = {
  render: () => <UnderConstructionPage />,
  parameters: {
    reactRouter: {
      routePath: "/under-construction",
    },
  },
};
