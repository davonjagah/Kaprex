import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Atoms/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your name",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "example@email.com",
    error: "Invalid email address",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};
