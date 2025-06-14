import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FormField } from "./FormField";

// Define the shape of your form data
interface StoryFormValues {
  name: string;
  custom: string;
}

const meta: Meta<typeof FormField<StoryFormValues>> = {
  title: "Molecules/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof FormField<StoryFormValues>>;

export const Default: Story = {
  render: () => {
    const Wrapper = () => {
      // Provide generic for just the "name" field
      const { control } = useForm<Pick<StoryFormValues, "name">>({
        defaultValues: { name: "" },
        mode: "onChange",
      });
      return (
        <form style={{ width: 300 }}>
          <FormField
            name="name"
            control={control}
            label="Name"
            placeholder="Enter your name"
            required
          />
        </form>
      );
    };
    return <Wrapper />;
  },
};
