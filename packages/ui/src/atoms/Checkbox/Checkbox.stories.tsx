import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked by default",
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: "I agree to the policy",
    error: "You must agree to continue",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const Wrapper = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Checkbox
          {...args}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label={args.label || "Controlled checkbox"}
        />
      );
    };
    return <Wrapper />;
  },
};
