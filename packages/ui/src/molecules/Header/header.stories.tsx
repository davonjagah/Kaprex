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
    LinkComponent: {
      table: {
        disable: true, // optional: hides it from controls
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const MockLink = ({ children }: { children: React.ReactNode }) => (
  <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
    {children}
  </a>
);

export const Default: Story = {
  args: {
    title: "Buy",
    onButtonClick: () => console.log("Connect Wallet clicked"),
    profile: true,
    LinkComponent: MockLink,
  },
  name: "Header with title and profile icon",
};
