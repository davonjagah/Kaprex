import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SidebarOverlay from "./SidebarOverlay";

const meta: Meta<typeof SidebarOverlay> = {
  title: "Widgets/SidebarOverlay",
  component: SidebarOverlay,
  tags: ["autodocs"],
  argTypes: {
    open: { control: false },
    onClose: { control: false },
    children: { control: false },
    position: { control: "radio", options: ["left", "right"] },
    widthClass: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarOverlay>;

// const links: SidebarLink[] = [
//   { label: "Home", icon: <Home size={20} />, href: "#", active: true },
//   { label: "Portfolio", icon: <Briefcase size={20} />, href: "#" },
//   { label: "Earn", icon: <BarChart size={20} />, href: "#" },
//   { label: "Cards", icon: <CreditCard size={20} />, href: "#" },
//   { label: "Merchant", icon: <Store size={20} />, href: "#" },
// ];

// const sidebar = (
//   <Sidebar
//     logo={<span className="font-bold text-xl text-orange-500">kaprex</span>}
//     links={links}
//     footer={<div className="text-xs text-gray-400">Sidebar Footer</div>}
//   />
// );

export const RightSidebar: Story = {
  render: (args) => {
    const Wrapper = () => {
      const [open, setOpen] = useState(false);
      return (
        <div className="min-h-screen flex flex-col">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded m-4"
            onClick={() => setOpen(true)}
          >
            Open Sidebar (Right)
          </button>
          <SidebarOverlay {...args} open={open} onClose={() => setOpen(false)}>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Main Content</h2>
              <p>
                This is the main content area. Resize to mobile and click the
                button to open the sidebar.
              </p>
            </div>
          </SidebarOverlay>
        </div>
      );
    };

    return <Wrapper />;
  },
  name: "Right Sidebar",
};

export const LeftSidebar: Story = {
  render: (args) => {
    const Wrapper = () => {
      const [open, setOpen] = useState(false);
      return (
        <div className="min-h-screen flex flex-col">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded m-4"
            onClick={() => setOpen(true)}
          >
            Open Sidebar (Left)
          </button>
          <SidebarOverlay
            {...args}
            open={open}
            onClose={() => setOpen(false)}
            position="left"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Main Content</h2>
              <p>
                This is the main content area. Resize to mobile and click the
                button to open the sidebar from the left.
              </p>
            </div>
          </SidebarOverlay>
        </div>
      );
    };

    return <Wrapper />;
  },
  name: "Left Sidebar",
};
