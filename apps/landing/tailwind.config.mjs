import sharedConfig from "@repo/tailwind-config/tailwind-config";

export default {
  ...sharedConfig,
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
};
