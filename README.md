# leve-shad-ui

A React component library built on [Base UI](https://base-ui.com/), [Tailwind CSS v4](https://tailwindcss.com/), and [tailwind-variants](https://www.tailwind-variants.org/). Components expose a simple, opaque prop API — no sub-component composition required.

## Installation

```bash
npm install leve-shad-ui
```

## Setup

Import the stylesheet once in your app entry point:

```tsx
import "leve-shad-ui/index.css";
```

## Components

### Avatar

Displays a user avatar with image and fallback support.

```tsx
import { Avatar } from "leve-shad-ui";

<Avatar src="https://example.com/photo.jpg" fallback="JD" />
<Avatar fallback="AB" size="lg" />
```

| Prop        | Type                      | Default |
| ----------- | ------------------------- | ------- |
| `src`       | `string`                  | —       |
| `fallback`  | `ReactNode`               | —       |
| `size`      | `"sm" \| "md" \| "lg"`   | `"md"`  |
| `className` | `string`                  | —       |

---

### Button

A clickable button with color, variant, size, and icon support.

```tsx
import { Button } from "leve-shad-ui";
import { ArrowRight } from "lucide-react";

<Button>Click me</Button>
<Button variant="outline" color="orange">Outline</Button>
<Button size="sm" leftIcon={<ArrowRight />}>With icon</Button>
<Button rounded />
```

| Prop        | Type                                                                                                                          | Default     |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `variant`   | `"solid" \| "outline" \| "ghost"`                                                                                             | `"solid"`   |
| `color`     | `"primary" \| "secondary" \| "black" \| "white" \| "purple" \| "orange" \| "red" \| "yellow" \| "sand" \| "petrol" \| "olive" \| "pink" \| "neutral" \| "green"` | `"primary"` |
| `size`      | `"sm" \| "md"`                                                                                                                | `"md"`      |
| `rounded`   | `boolean`                                                                                                                     | `false`     |
| `leftIcon`  | `ReactNode`                                                                                                                   | —           |
| `rightIcon` | `ReactNode`                                                                                                                   | —           |

Extends all [Base UI Button props](https://base-ui.com/components/button).

---

### Input

A text input with optional left/right icons and built-in error state styling.

```tsx
import { Input } from "leve-shad-ui";
import { Search } from "lucide-react";

<Input placeholder="Search..." leftIcon={<Search />} />
<Input aria-invalid="true" />
```

| Prop        | Type        | Default |
| ----------- | ----------- | ------- |
| `leftIcon`  | `ReactNode` | —       |
| `rightIcon` | `ReactNode` | —       |

Extends all standard HTML `<input>` props.

---

### Link

A styled anchor element with icon support and disabled state.

```tsx
import { Link } from "leve-shad-ui";
import { ExternalLink } from "lucide-react";

<Link href="/about">About</Link>
<Link href="https://example.com" color="orange" rightIcon={<ExternalLink />}>
  External
</Link>
```

| Prop        | Type                                                                                                                                       | Default     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `href`      | `string`                                                                                                                                   | required    |
| `color`     | `"primary" \| "secondary" \| "black" \| "white" \| "purple" \| "orange" \| "red" \| "yellow" \| "sand" \| "petrol" \| "olive" \| "lead" \| "pink" \| "neutral" \| "green"` | `"primary"` |
| `leftIcon`  | `ReactNode`                                                                                                                                | —           |
| `rightIcon` | `ReactNode`                                                                                                                                | —           |
| `disabled`  | `boolean`                                                                                                                                  | —           |

Extends all standard HTML `<a>` props.

---

## Dark Mode

Dark mode is class-based. Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from "leve-shad-ui";

<ThemeProvider>
  <App />
</ThemeProvider>
```

## Development

```bash
bun install
bun run dev          # Storybook at http://localhost:6006
bun run build        # TypeScript check + library build
bun run test         # Run tests
bun run lint         # ESLint
bun run format       # Prettier
```
