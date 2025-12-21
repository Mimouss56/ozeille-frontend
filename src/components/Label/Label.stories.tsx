import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "./Label";

const meta = {
  title: "UI/Label",
  component: Label,
  args: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label>Label</Label>,
};

export const WithInput: Story = {
  render: () => (
    <Label>
      <span className="label-text">Email</span>
      <input
        id="email"
        name="email"
        value={"johndoe@email.com"}
        placeholder="Email"
        className="input text-neutral outline-neutral border-neutral"
      />
    </Label>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <Label>
        <span>Mot de passe</span>
        <input
          type="password"
          placeholder="Mot de passe"
          className="input text-neutral outline-neutral border-neutral"
        />
      </Label>

      <span className="text-neutral/70 text-xs">Au moins 8 caractères</span>
    </div>
  ),
};
