import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Sidebar, { SidebarLink } from "./Sidebar";
import { Home, Briefcase, CreditCard, Store, BarChart } from "lucide-react";

const meta: Meta<typeof Sidebar> = {
  title: "Widgets/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {
    logo: { control: false },
    links: { control: false },
    footer: { control: false },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const links: SidebarLink[] = [
  { label: "Home", icon: <Home size={20} />, href: "#", active: true },
  { label: "Portfolio", icon: <Briefcase size={20} />, href: "#" },
  { label: "Earn", icon: <BarChart size={20} />, href: "#" },
  { label: "Cards", icon: <CreditCard size={20} />, href: "#" },
  { label: "Merchant", icon: <Store size={20} />, href: "#" },
];

export const Basic: Story = {
  render: (args) => (
    <Sidebar
      {...args}
      logo={<span className="font-bold text-xl text-orange-500">kaprex</span>}
      links={links}
      footer={<div className="text-xs text-gray-400">Sidebar Footer</div>}
    />
  ),
  name: "Basic Sidebar",
};
