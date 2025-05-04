# Kaprex Next.js + TypeScript Monorepo (App Router) For All FrontEnd Applications

Monorepo with three Next.js apps (`merchants`, `stake`, and `landing`) using the App Router, plus shared packages for UI, utilities, and config. The design system follows Atomic Design principles for scalable and maintainable UI development.

---

## Apps and Packages

### Apps

- **`merchants`** – Next.js App Router app for merchants
- **`stake`** – Next.js App Router app for stake feature
- **`landing`** – Next.js App Router app for unsigned users
- **`storybook`** – Component documentation and testing environment

### Shared Packages

- `ui`: shared React component library using Tailwind CSS
  - `atoms`: Basic building blocks (Button, Typography, IconButton)
  - `molecules`: Composed components (Header)
  - `widgets`: Complex UI sections
  - `icons`: SVG icon components
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next`, `eslint-config-prettier`)
- `tsconfig`: shared `tsconfig.json` setup
- `tailwind-config`: shared Tailwind v4 configuration

## Features/Utilities

- TypeScript
- Tailwind CSS v4 (centralized config with `@theme` support)
- PostCSS with plugin sharing
- ESlint, Prettier, Stylelint
- Storybook for UI preview and documentation
- Turborepo for efficient dev workflows
- Component-driven development with Atomic Design principles

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
│   ├── merchants/
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
│   │   │  ├── atoms/        # Basic components (Button, Typography, IconButton)
│   │   │  ├── molecules/    # Composed components (Header)
│   │   │  ├── widgets/      # Complex UI sections
│   │   │  ├── icons/        # SVG icon components
│   │   │  └── index.ts      # Exports components for tree-shaking
│   ├── utils/                # Reusable functions/services
│   ├── tailwind-config/      # Shared theme and tokens
│   ├── eslint-config/
│   └── tsconfig/             # Base tsconfig presets
│
├── scripts/                  # CLI tools (e.g. create-package)
├── turbo.json
├── package.json
└── .eslintrc.js
```

## Component Examples

### Button Component

```tsx
import { Button } from "@repo/ui/atoms";

export function MyComponent() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

### Header Component

```tsx
import { Header } from "@repo/ui/molecules";
import Link from "next/link";

export function PageHeader() {
  return (
    <Header
      title="Dashboard"
      onButtonClick={() => console.log("Connect Wallet")}
      profile={true}
      LinkComponent={({ children }) => <Link href="/">{children}</Link>}
    />
  );
}
```

### Typography Component

```tsx
import { Typography } from "@repo/ui/atoms";

export function TextExample() {
  return (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="body">Regular text</Typography>
      <Typography variant="muted">Muted text</Typography>
    </>
  );
}
```

## Development

```bash
# Install dependencies
yarn install

# Start all apps (if using Turborepo dev script)
yarn dev

# Start a single app (e.g., stake app only)
yarn workspace stake dev
# Or for merchants app
yarn workspace merchants dev
# Or for landing app
yarn workspace landing dev

# Start Storybook
yarn storybook

# Run tests
yarn test

# Build all apps and packages
yarn build
```

## Lint and Type Check

```bash
# Run linters
yarn lint

# Type check
yarn check-types

# Format code
yarn format
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

### Example Component with Theme

```tsx
import { cn } from "@repo/ui/utils";

export function ThemedButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-[theme(colors.primary)] text-white rounded-full px-6 py-2">
      {children}
    </button>
  );
}
```

Or using class composition tools:

```tsx
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-white rounded-full px-6 py-2",
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
