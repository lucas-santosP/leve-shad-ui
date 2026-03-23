import { tv, type VariantProps } from "tailwind-variants";

export const avatarStyles = tv({
  slots: {
    root: "relative flex shrink-0 rounded-full select-none",
    image: "aspect-square size-full rounded-full object-cover",
    fallback: "flex size-full items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600",
  },
  variants: {
    size: {
      sm: {
        root: "size-10",
        fallback: "text-base",
      },
      md: {
        root: "size-16",
        fallback: "text-2xl",
      },
      lg: {
        root: "size-24",
        fallback: "text-[40px]",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type AvatarStylesProps = VariantProps<typeof avatarStyles>;
