import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import type { InputColor } from "./InputColor.tsx";
import { InputColor as InputColorComponent } from "./InputColor.tsx";

const meta = {
  title: "UI/InputColor",
  component: InputColorComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: "radio",
      description: "Taille du sélecteur de couleur",
    },
    style: {
      options: ["neutral", "primary", "secondary", "accent", "success", "info", "error"],
      control: "radio",
      description: "Style DaisyUI du sélecteur",
    },
    label: {
      control: "text",
      description: "Label du sélecteur de couleur",
    },
    value: {
      control: "color",
      description: "Valeur de la couleur",
    },
    disabled: {
      control: "boolean",
      description: "État désactivé",
    },
  },
} satisfies Meta<typeof InputColorComponent>;

export default meta;

type Story = StoryObj<typeof InputColorComponent>;

// Wrapper pour gérer le state dans Storybook
const InputColorWithState = (args: React.ComponentProps<typeof InputColor>) => {
  const [color, setColor] = useState(args.value || "#3B82F6");
  return <InputColorComponent {...args} value={color} onChange={setColor} />;
};

export const Default: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "default-color",
    value: "#3B82F6",
  },
};

export const WithLabel: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "labeled-color",
    label: "Choisir une couleur",
    value: "#10B981",
  },
};

export const SizeXS: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "xs-color",
    size: "xs",
    label: "Extra Small",
    value: "#EF4444",
  },
};

export const SizeSM: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "sm-color",
    size: "sm",
    label: "Small",
    value: "#F59E0B",
  },
};

export const SizeMD: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "md-color",
    size: "md",
    label: "Medium (default)",
    value: "#8B5CF6",
  },
};

export const SizeLG: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "lg-color",
    size: "lg",
    label: "Large",
    value: "#EC4899",
  },
};

export const SizeXL: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "xl-color",
    size: "xl",
    label: "Extra Large",
    value: "#14B8A6",
  },
};

export const RandomColor: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "random-color",
    label: "Couleur aléatoire",
  },
};

export const StylePrimary: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "primary-color",
    label: "Style Primary",
    style: "primary",
    value: "#570DF8",
  },
};

export const StyleSecondary: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "secondary-color",
    label: "Style Secondary",
    style: "secondary",
    value: "#F000B8",
  },
};

export const StyleAccent: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "accent-color",
    label: "Style Accent",
    style: "accent",
    value: "#37CDBE",
  },
};

export const StyleSuccess: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "success-color",
    label: "Style Success",
    style: "success",
    value: "#36D399",
  },
};

export const StyleError: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "error-color",
    label: "Style Error",
    style: "error",
    value: "#F87272",
  },
};

export const Disabled: Story = {
  render: (args) => <InputColorWithState {...args} />,
  args: {
    id: "disabled-color",
    label: "Désactivé",
    value: "#3B82F6",
    disabled: true,
  },
};

const AllSizesComponent = () => {
  const [colors, setColors] = useState({
    xs: "#EF4444",
    sm: "#F59E0B",
    md: "#10B981",
    lg: "#3B82F6",
    xl: "#8B5CF6",
  });

  return (
    <div className="flex items-end gap-4">
      <InputColorComponent size="xs" label="XS" value={colors.xs} onChange={(c) => setColors({ ...colors, xs: c })} />
      <InputColorComponent size="sm" label="SM" value={colors.sm} onChange={(c) => setColors({ ...colors, sm: c })} />
      <InputColorComponent size="md" label="MD" value={colors.md} onChange={(c) => setColors({ ...colors, md: c })} />
      <InputColorComponent size="lg" label="LG" value={colors.lg} onChange={(c) => setColors({ ...colors, lg: c })} />
      <InputColorComponent size="xl" label="XL" value={colors.xl} onChange={(c) => setColors({ ...colors, xl: c })} />
    </div>
  );
};

export const AllSizes: Story = {
  render: () => <AllSizesComponent />,
};

const AllStylesComponent = () => {
  const [colors, setColors] = useState({
    neutral: "#A6ADBB",
    primary: "#570DF8",
    secondary: "#F000B8",
    accent: "#37CDBE",
    success: "#36D399",
    info: "#3ABFF8",
    error: "#F87272",
  });

  return (
    <div className="flex flex-wrap items-end gap-4">
      <InputColorComponent
        label="Neutral"
        style="neutral"
        value={colors.neutral}
        onChange={(c) => setColors({ ...colors, neutral: c })}
      />
      <InputColorComponent
        label="Primary"
        style="primary"
        value={colors.primary}
        onChange={(c) => setColors({ ...colors, primary: c })}
      />
      <InputColorComponent
        label="Secondary"
        style="secondary"
        value={colors.secondary}
        onChange={(c) => setColors({ ...colors, secondary: c })}
      />
      <InputColorComponent
        label="Accent"
        style="accent"
        value={colors.accent}
        onChange={(c) => setColors({ ...colors, accent: c })}
      />
      <InputColorComponent
        label="Success"
        style="success"
        value={colors.success}
        onChange={(c) => setColors({ ...colors, success: c })}
      />
      <InputColorComponent
        label="Info"
        style="info"
        value={colors.info}
        onChange={(c) => setColors({ ...colors, info: c })}
      />
      <InputColorComponent
        label="Error"
        style="error"
        value={colors.error}
        onChange={(c) => setColors({ ...colors, error: c })}
      />
    </div>
  );
};

export const AllStyles: Story = {
  render: () => <AllStylesComponent />,
};
