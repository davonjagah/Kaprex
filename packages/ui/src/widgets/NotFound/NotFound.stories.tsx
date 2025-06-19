import type { Meta, StoryObj } from "@storybook/react";
import NotFound from "./NotFound";

const meta: Meta<typeof NotFound> = {
  title: "Widgets/NotFound",
  component: NotFound,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  render: () => <NotFound />,
};
