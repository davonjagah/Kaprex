import sharedConfig from "@repo/tailwind-config/tailwind-config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...sharedConfig,
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
};
