import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Overlay from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Atoms/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    onClick: { action: "clicked" },
    className: { control: "text" },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Basic: Story = {
  render: (args) => {
    const Wrapper = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setOpen(true)}
          >
            Open Overlay
          </button>
          <Overlay {...args} open={open} onClick={() => setOpen(false)}>
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-xs">
                <h2 className="text-lg font-semibold mb-2">Overlay Content</h2>
                <p className="mb-4">
                  This is a reusable overlay. Click outside to close.
                </p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white rounded"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Overlay>
        </>
      );
    };

    return <Wrapper />;
  },
  name: "Basic Overlay",
};
