import type { Meta, StoryObj } from "@storybook/react-vite";

import { Dot } from "./Dot";

const meta = {
  title: "UI/Dot",
  component: Dot,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    className: { control: "text" },
  },
} satisfies Meta<typeof Dot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#6366f1", // violet
  },
};

export const Colors: Story = {
  args: {
    color: "#6366f1",
  },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Dot color="#6366f1" /> {/* Violet */}
      <Dot color="#22c55e" /> {/* Vert */}
      <Dot color="#f59e42" /> {/* Orange */}
      <Dot color="#ef4444" /> {/* Rouge */}
      <Dot color="#0ea5e9" /> {/* Bleu */}
      <Dot color="#fbbf24" /> {/* Jaune */}
      <Dot color="#a3a3a3" /> {/* Gris */}
    </div>
  ),
};
