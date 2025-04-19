import sharedConfig from "@repo/tailwind-config/tailwind-config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...sharedConfig,
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.stories.{js,ts,jsx,tsx}",
  ],
};
