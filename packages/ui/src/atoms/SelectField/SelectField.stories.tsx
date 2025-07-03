import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "./SelectField";

const meta: Meta<typeof SelectField> = {
  title: "Atoms/SelectField",
  component: SelectField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the select field",
    },
    error: {
      control: "text",
      description: "Error message to display below the field",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select field is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select an option",
    children: (
      <>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Select an option",
    error: "This field is required",
    children: (
      <>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
};

export const WithoutLabel: Story = {
  args: {
    children: (
      <>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Select",
    disabled: true,
    children: (
      <>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
};

export const Required: Story = {
  args: {
    label: "Required Field",
    required: true,
    children: (
      <>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
};

export const BankOptions: Story = {
  args: {
    label: "Bank Name",
    children: (
      <>
        <option value="">Select a bank</option>
        <option value="UBA PLC">UBA PLC</option>
        <option value="GT Bank">GT Bank</option>
        <option value="Access Bank">Access Bank</option>
        <option value="Zenith Bank">Zenith Bank</option>
      </>
    ),
  },
};

export const NetworkOptions: Story = {
  args: {
    label: "Network Provider",
    children: (
      <>
        <option value="">Select a network</option>
        <option value="MTN">MTN</option>
        <option value="Airtel">Airtel</option>
        <option value="Glo">Glo</option>
        <option value="9mobile">9mobile</option>
      </>
    ),
  },
};
