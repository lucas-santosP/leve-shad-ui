import { tv, type VariantProps } from "tailwind-variants";

export const linkStyles = tv({
  base: [
    "flex h-max gap-2 font-bold transition-all duration-200 outline-none",
    "pressed:brightness-75 hover:brightness-[.875] focus-visible:ring-2 focus-visible:ring-current",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "[&_svg]:h-6 [&_svg]:w-6",
  ],
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      black: "text-black",
      white: "text-white",
      purple: "text-purple-500",
      orange: "text-orange-500",
      red: "text-red-500",
      yellow: "text-yellow-500",
      sand: "text-sand-500",
      petrol: "text-petrol-500",
      olive: "text-olive-500",
      lead: "text-lead-500",
      pink: "text-pink-500",
      neutral: "text-neutral-500",
      green: "text-green-500",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export type LinkStylesProps = VariantProps<typeof linkStyles>;
