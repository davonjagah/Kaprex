# Kaprex Next.js + TypeScript Monorepo (App Router) For All FrontEnd Applications

Monorepo with three Next.js apps (`merchant`, `stake`, and `landing`) using the App Router, plus shared packages for UI, utilities, and config. The design system follows Atomic Design principles for scalable and maintainable UI development.

---

## Apps and Packages

### Apps

- **`merchant`** – Next.js App Router app for merchants
- **`stake`** – Next.js App Router app for stake feature
- **`landing`** – Next.js App Router app for unsigned users

### Shared Packages

- `ui`: shared React component library using Tailwind CSS
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next`, `eslint-config-prettier`)
- `tsconfig`: shared `tsconfig.json` setup
- `tailwind-config`: shared Tailwind v4 configuration

## Features/Utilities

- TypeScript
- Tailwind CSS v4 (centralized config with `@theme` support)
- PostCSS with plugin sharing
- ESlint, Prettier, Stylelint
- Storybook for UI preview
- Turborepo for efficient dev workflows

## Git Hooks and Commit Standards

This repo enforces consistent commit messages and pre-commit checks using Husky and Commitlint.

### Tools Used

- `Husky` – Manages Git hooks

- `Commitlint` – Ensures commit message format (e.g., Conventional Commits)

- `lint-staged` – Runs linters only on staged files

### Commit Format

We follow Conventional Commits, such as:

```makefile
feat(ui): add new Button component
fix(stake): correct broken link in README
chore: update dependencies
```

---

## Folder Structure

```bash
.
├── apps/
│   ├── merchant/
│   │   ├── app/              # App Router routes
│   │   ├── public/
│   │   └── src/
│   │       ├── lib/         # Local utilities
│   │       ├── styles/      # Local theme or overrides
│   │       └── ui/          # Local components
│
│   ├── stake/
│   │   ├── app/
│   │   ├── public/
│   │   └── src/
│
│   ├── landing/
│   │   ├── app/
│   │   ├── public/
│   │   └── src/
│
│   ├── storybook/
│   │   ├── .storybook/
│
├── packages/
│   ├── ui/            # Shared UI components
│   │   ├── src/
│   │   │  ├── atoms/        # Small, reusable elements (e.g. Button, Input)
│   │   │  ├── molecules/    # Composed atoms (e.g. FormGroup, Card)
│   │   │  ├── widgets/    # Complex UI sections (e.g. Header, Footer)
│   │   │  └── index.ts      # Exports components for tree-shaking
│   ├── utils/                # Reusable functions/services
│   ├── tailwind-config/               # Shared theme and tokens
│   ├── eslint-config/
│   └── tsconfig/             # Base tsconfig presets
│
├── scripts/                  # CLI tools (e.g. create-package)
├── turbo.json
├── package.json
└── .eslintrc.js
```

### Tailwind Setup

Each app imports a tailwind-config/base.css that includes:

```css
@import "tailwindcss";
@import "tailwindcss/preflight";

@theme {
  colors {
    primary: #ff5722;
  }
}
```

To share config, apps reference Tailwind and PostCSS like this:

`app/merchant/globals.css`

```css
@import "@repo/tailwind-config/style";
```

`app/merchant/postcss.config.mjs`

```js
import postCssConfig from "@repo/tailwind-config/postcss-config";

export default postCssConfig;
```

## Create New UI Component

```bash
cd packages/ui
yarn run create
# Choose: ui
# Name: header
```

Creates the new component in packages/ui.

To add a shared utility refer here - [https://turbo.build/docs/crafting-your-repository/creating-an-internal-package]

## Development

```bash
    yarn install
    yarn dev
```

## Lint, Type Check

```bash
    yarn lint
    yarn check-types
```

## Tailwind Theme Helpers

Use theme extensions via `@theme()` in `.css` or Tailwind utility class compositions in `clsx` or `tailwind-variants`.

You can define global theme tokens in `tailwind.config.css` using v4 syntax like:

```css
@theme {
  colors {
    primary: #1e40af;
    secondary: #9333ea;
  }

  breakpoints {
    sm: 640px;
    md: 768px;
    lg: 1024px;
  }
}
```

### Example Component

```tsx
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-[theme(colors.primary)] text-white rounded px-4 py-2">
      {children}
    </button>
  );
}
```

Or using class composition tools:

```tsx
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-white rounded px-4 py-2",
  variants: {
    intent: {
      primary: "bg-[theme(colors.primary)]",
      secondary: "bg-[theme(colors.secondary)]",
    },
  },
});

export const Button = ({ children, intent = "primary" }) => (
  <button className={button({ intent })}>{children}</button>
);
```
