import { tv, type VariantProps } from "tailwind-variants";

export const inputStyles = tv({
  slots: {
    wrapper: "relative flex w-full flex-col gap-2 font-sans",
    input: [
      "text-md h-12 w-full rounded-lg bg-white px-4.5 py-3 font-normal text-neutral-900 outline-none",
      "border-2 border-neutral-400 transition-all duration-100",
      "placeholder:text-neutral-400 focus:border-primary focus:outline-none",
      "disabled:pointer-events-none disabled:border-neutral-300 disabled:bg-white disabled:text-neutral-400",
      "read-only:pointer-events-none read-only:border-neutral-200 read-only:bg-neutral-200 read-only:text-neutral-700",
      "aria-invalid:border-error aria-invalid:pr-10.5 focus:aria-invalid:border-error",
    ],
    leftIcon: [
      "absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-neutral-700",
      "aria-disabled:text-neutral-400 aria-readonly:text-neutral-600",
    ],
    rightIcon: [
      "absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 text-neutral-700",
      "aria-disabled:text-neutral-400 aria-readonly:text-neutral-600",
    ],
    errorIcon: "absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 text-error",
  },
  variants: {
    rightIcon: {
      true: {
        input: "pr-10.5 invalid:pr-18.5",
        errorIcon: "-translate-x-[125%] -translate-y-1/2",
      },
    },
    leftIcon: {
      true: {
        input: "pl-10.5",
      },
    },
  },
});

export type InputStylesProps = Omit<VariantProps<typeof inputStyles>, "leftIcon" | "rightIcon">;
