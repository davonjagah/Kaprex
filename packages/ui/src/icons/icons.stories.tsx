/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import * as Icons from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const iconNames = Object.keys(Icons) as (keyof typeof Icons)[];

const meta: Meta = {
  title: "Icons/Icons",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const AllIcons: StoryObj = {
  render: () => {
    const [size, setSize] = useState(40);
    const [darkMode, setDarkMode] = useState(false);

    return (
      <div
        className={
          darkMode
            ? "bg-gray-900 text-white p-6 min-h-screen"
            : "bg-white text-black p-6 min-h-screen"
        }
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4 items-center">
            <label className="text-sm font-medium">Size:</label>
            <input
              type="range"
              min={16}
              max={128}
              step={8}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-48"
            />
            <span className="text-sm">{size}px</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-4 py-2 border rounded-md hover:opacity-80 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {iconNames.map((name) => {
            const IconComponent = Icons[name];
            return (
              <div
                key={name}
                className="flex flex-col items-center gap-2 text-center"
              >
                <IconComponent width={size} height={size} />
                <span className="text-xs break-words max-w-[6rem]">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
