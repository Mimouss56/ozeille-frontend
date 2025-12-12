import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputNumber } from "./InputNumber";

const meta = {
    title: 'UI/InputNumber',
    component: InputNumber,
    tags: ['autodocs'],
    parameters: { 
        layout: 'centered',
        actions: { argTypesRegex: "^on.*" }, 
    },
    args: {
        placeholder: "0.00",
        label: "Montant",
        disabled: false,
        step: 0.01,
    },
    argTypes: {
        size: {
            control: "radio",
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: "Taille de l'input",
        },
        style: {
            control: "select",
            options: ['primary', 'secondary', 'neutral', 'accent', 'info', 'success', 'warning', 'error'],
            description: "Couleur/État de l'input",
        },
        disabled: { control: 'boolean' },
        helperText: { control: 'text' },
        label: { control: 'text' },
    }
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {};

export const WithError: Story = {
    args: {
        label: "Amount Limit",
        value: -1,
        style: "error",
        helperText: "Le montant limite ne peut pas être négatif",
    },
};

export const Disabled: Story = {
    args: {
        label: "Amount Limit",
        value: 99999999.99,
        disabled: true,
    },
};