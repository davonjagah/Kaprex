import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { OtpInput } from "./OtpInput";

const meta: Meta<typeof OtpInput> = {
  title: "Molecules/OtpInput",
  component: OtpInput,
};
export default meta;

type Story = StoryObj<typeof OtpInput>;

export const Basic: Story = {
  render: () => {
    const Wrapper = () => {
      const [otp, setOtp] = useState(["", "", "", "", "", ""]);
      const handleChange = (idx: number, val: string) => {
        const next = [...otp];
        next[idx] = val;
        setOtp(next);
      };
      return (
        <div className="max-w-md mx-auto mt-10">
          <OtpInput value={otp} onChange={handleChange} />
          <div className="mt-4 text-center">Value: {otp.join("")}</div>
        </div>
      );
    };
    return <Wrapper />;
  },
};
