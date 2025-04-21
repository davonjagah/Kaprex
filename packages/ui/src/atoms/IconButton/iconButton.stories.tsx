import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./iconButton";
import { Plus } from "lucide-react";

const meta: Meta<typeof IconButton> = {
  title: "Components/Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "primary",
    children: <Plus className="w-5 h-5" />,
    "aria-label": "Add",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconButton size="sm" aria-label="Small">
        <Plus className="w-4 h-4" />
      </IconButton>
      <IconButton size="md" aria-label="Medium">
        <Plus className="w-5 h-5" />
      </IconButton>
      <IconButton size="lg" aria-label="Large">
        <Plus className="w-6 h-6" />
      </IconButton>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconButton variant="primary" aria-label="Primary">
        <Plus className="w-5 h-5" />
      </IconButton>
      <IconButton variant="secondary" aria-label="Secondary">
        <Plus className="w-5 h-5" />
      </IconButton>
      <IconButton variant="outline" aria-label="Outline">
        <Plus className="w-5 h-5" />
      </IconButton>
    </div>
  ),
};
