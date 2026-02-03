import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./Checkbox.tsx";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    label: "Storybook checkbox label",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: "radio",
    },
    style: {
      options: ["primary", "secondary", "neutral", "accent", "info", "error", "success"],
      control: "radio",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Checkbox input label",
  },
};

export const CheckboxInputChecked: Story = {
  args: {
    label: "Checkbox input label",
    value: true,
  },
};

export const CheckboxInputError: Story = {
  args: {
    label: "Checkbox input label",
    style: "error",
  },
};

export const CheckboxInputErrorChecked: Story = {
  args: {
    label: "Checkbox input label",
    value: true,
    style: "error",
  },
};

export const CheckboxInputDisabled: Story = {
  args: {
    label: "Checkbox input label",
    disabled: true,
  },
};

export const CheckboxInputWithLabelOnLeft: Story = {
  args: {
    label: "Checkbox input label",
    placement: "left",
  },
};

export const ToggleInput: Story = {
  args: {
    label: "Toggle input label",
    toggleMode: true,
  },
};

export const ToggleInputWithLabelOnTheLeftSide: Story = {
  args: {
    label: "Toggle input label",
    toggleMode: true,
    placement: "left",
  },
};

export const ToggleInputWithLabelOnBothSide: Story = {
  args: {
    label: "Toggle left label",
    toggleMode: true,
    placement: "both",
    rightLabel: "Toggle right label",
  },
};

export const ToggleInputChecked: Story = {
  args: {
    label: "Toggle input label",
    toggleMode: true,
    value: true,
  },
};

export const ToggleInputDisabled: Story = {
  args: {
    label: "Toggle input label",
    toggleMode: true,
    disabled: true,
  },
};

export const ToggleInputDisabledChecked: Story = {
  args: {
    label: "Toggle input label",
    toggleMode: true,
    disabled: true,
    value: true,
  },
};

export const ToggleInputError: Story = {
  args: {
    label: "Toggle input label",
    toggleMode: true,
    style: "error",
  },
};

export const ToggleInputErrorChecked: Story = {
  args: {
    label: "Toggle input label",
    toggleMode: true,
    style: "error",
    value: true,
  },
};

export const ToggleInputWithIcon: Story = {
  args: {
    label: SunIcon,
    toggleMode: true,
    placement: "both",
    rightLabel: MoonIcon,
  },
};
