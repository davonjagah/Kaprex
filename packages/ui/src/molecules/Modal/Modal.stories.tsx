import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const Wrapper = () => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          <button
            className="px-4 py-2 bg-black text-white rounded"
            onClick={() => setOpen(true)}
          >
            Open Modal
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold mb-4">Modal Content</h2>
              <p>This is a reusable modal molecule.</p>
            </div>
          </Modal>
        </div>
      );
    };
    return <Wrapper />;
  },
};
