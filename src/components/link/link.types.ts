import React from "react";
import type { LinkStylesProps } from "./link.styles";

export interface LinkProps extends Omit<React.ComponentProps<"a">, "color">, LinkStylesProps {
  /**
   * Additional CSS classes.
   */
  className?: string;
  /**
   * Text node children.
   */
  children?: React.ReactNode;
  /**
   * Link href attribute.
   */
  href: string;
  /**
   * Left icon element.
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon element.
   */
  rightIcon?: React.ReactNode;
  /**
   * Disabled state.
   */
  disabled?: boolean;
}
