import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { WalletButton } from "./walletButton";

const meta: Meta<typeof WalletButton> = {
  title: "Atoms/WalletButton",
  component: WalletButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outline", "text"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    children: {
      control: "text",
      description: "Button content (optional)",
    },
  },
  args: {
    variant: "primary",
    size: "md",
  },
};

export default meta;

type Story = StoryObj<typeof WalletButton>;

export const Default: Story = {
  args: {},
  render: (args) => <WalletButton {...args} />,
};

export const CustomChildren: Story = {
  args: {
    children: "Connect Kaprex Wallet",
  },
  render: (args) => <WalletButton {...args} />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <WalletButton variant="primary">Primary</WalletButton>
      <WalletButton variant="secondary">Secondary</WalletButton>
      <WalletButton variant="outline">Outline</WalletButton>
      <WalletButton variant="text">Text</WalletButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <WalletButton size="sm">Small</WalletButton>
      <WalletButton size="md">Medium</WalletButton>
      <WalletButton size="lg">Large</WalletButton>
    </div>
  ),
};
