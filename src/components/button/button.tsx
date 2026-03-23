import { cn } from "tailwind-variants";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { buttonStyles } from "./button.styles";
import type { ButtonProps } from "./button.types";

function Button(props: ButtonProps) {
  const { children, className, variant, color, size, rounded, leftIcon, rightIcon, ...rest } = props;

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonStyles({ variant, color, size, rounded }), className)}
      {...rest}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </ButtonPrimitive>
  );
}

export { Button };
