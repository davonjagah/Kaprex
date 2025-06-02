import type { Meta, StoryObj } from "@storybook/react";
import { FAQColumn } from "./FAQColumn";

const meta = {
  title: "Molecules/FAQ",
  component: FAQColumn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAQColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFAQs = [
  {
    question: "What is Kaprex?",
    answer:
      "Kaprex is a decentralized platform that allows users to stake their assets and earn rewards in a secure and transparent manner.",
  },
  {
    question: "How do I start staking?",
    answer:
      "To start staking, you'll need to connect your wallet, select the asset you want to stake, and follow the on-screen instructions to complete the staking process.",
  },
  {
    question: "What are the rewards?",
    answer:
      "Rewards vary based on the staking duration and the asset being staked. You can view the current APY rates on our platform.",
  },
  {
    question: "Is it safe to stake?",
    answer:
      "Yes, our platform uses industry-standard security measures and smart contracts that have been audited by leading security firms.",
  },
];

export const Default: Story = {
  args: {
    items: sampleFAQs,
    startIndex: 0,
    expandedIndex: null,
    onToggle: () => {},
  },
};

export const SingleFAQ: Story = {
  args: {
    items: sampleFAQs.slice(0, 1),
    startIndex: 0,
    expandedIndex: null,
    onToggle: () => {},
  },
};

export const Loading: Story = {
  args: {
    items: [],
    startIndex: 0,
    expandedIndex: null,
    onToggle: () => {},
  },
};

export const Error: Story = {
  args: {
    items: [],
    startIndex: 0,
    expandedIndex: null,
    onToggle: () => {},
  },
};

export const Empty: Story = {
  args: {
    items: [],
    startIndex: 0,
    expandedIndex: null,
    onToggle: () => {},
  },
};
