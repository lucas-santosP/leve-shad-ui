import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: [
    "inline-flex items-center justify-center gap-2 rounded-3xl px-6 py-3 font-bold transition-all duration-200",
    "hover:cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-0 focus-visible:outline-(--btn-color)/30 active:brightness-80 disabled:pointer-events-none disabled:opacity-40",
    "[&+svg]:h-6 [&+svg]:w-6",
  ],
  variants: {
    color: {
      primary: "[--btn-color:var(--color-primary)]",
      secondary: "[--btn-color:var(--color-secondary)]",
      black: "[--btn-color:var(--color-neutral-900)]",
      white: "[--btn-color:var(--color-neutral-100)]",
      purple: "[--btn-color:var(--color-purple-500)]",
      orange: "[--btn-color:var(--color-orange-500)]",
      red: "[--btn-color:var(--color-red-500)]",
      yellow: "[--btn-color:var(--color-yellow-500)]",
      sand: "[--btn-color:var(--color-sand-300)]",
      petrol: "[--btn-color:var(--color-petrol-700)]",
      olive: "[--btn-color:var(--color-olive-900)]",
      pink: "[--btn-color:var(--color-pink-500)]",
      neutral: "[--btn-color:var(--color-neutral-500)]",
      green: "[--btn-color:var(--color-green-600)]",
    },
    variant: {
      solid: "bg-(--btn-color) text-white hover:bg-[color-mix(in_srgb,var(--btn-color),black_20%)]",
      outline:
        "border-2 border-(--btn-color) bg-transparent text-(--btn-color) hover:border-[color-mix(in_lab,var(--btn-color),black_20%)] hover:text-[color-mix(in_lab,var(--btn-color),black_20%)]",
      ghost: "text-(--btn-color) hover:bg-(--btn-color)/10 hover:text-[color-mix(in_lab,var(--btn-color),black_20%)]",
    },
    size: {
      sm: "h-10 py-2 text-sm",
      md: "h-12 text-base",
    },
    rounded: {
      true: "rounded-full px-0 py-0",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      rounded: true,
      className: "w-10",
    },
    {
      size: "md",
      rounded: true,
      className: "w-12 [&+svg]:h-7.5 [&+svg]:w-7.5",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
    rounded: false,
  },
});

export type ButtonStylesProps = VariantProps<typeof buttonStyles>;
