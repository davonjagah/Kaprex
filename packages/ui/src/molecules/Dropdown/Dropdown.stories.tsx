import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown, { DropdownOption } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Atoms/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    options: { control: false },
    value: { control: false },
    onChange: { control: false },
    placeholder: { control: "text" },
    className: { control: "text" },
    renderOption: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options: DropdownOption[] = [
  { label: "Stables", value: "stables" },
  { label: "Crypto", value: "crypto" },
  { label: "Fiat", value: "fiat" },
];

export const Basic: Story = {
  render: (args) => {
    const Wrapper = () => {
      const [value, setValue] = useState("stables");

      return (
        <div className="p-8">
          <Dropdown
            {...args}
            options={options}
            value={value}
            onChange={setValue}
          />
          <div className="mt-4 text-sm text-gray-600">
            Selected: <span className="font-semibold">{value}</span>
          </div>
        </div>
      );
    };

    return <Wrapper />;
  },
  name: "Basic Dropdown",
};
