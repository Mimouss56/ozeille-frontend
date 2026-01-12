import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router"; 
import { Header } from "./Header";

const meta = {
  title: "Layouts/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false, 
        height: "100px",
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};