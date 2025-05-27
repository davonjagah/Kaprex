// components/Header/Header.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/Molecules/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title text displayed next to the brand icon",
    },
    onButtonClick: {
      action: "connectClicked",
      description: 'Function called when "Connect Wallet" button is clicked',
    },
    profile: {
      control: "boolean",
      description: "Toggles the profile IconButton (e.g. user initials)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Buy",
    onButtonClick: () => console.log("Connect Wallet clicked"),
    profile: true,
  },
  name: "Header with title and profile icon",
};
