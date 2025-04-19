import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body",
        "lead",
        "muted",
        "small",
      ],
    },
    as: {
      control: "text",
    },
    className: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
  args: {
    variant: "h1",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {(
        [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "body",
          "lead",
          "muted",
          "small",
        ] as const
      ).map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant.toUpperCase()} – Kaprex The quick brown fox jumps over the
          lazy dog.
        </Typography>
      ))}
    </div>
  ),
};
