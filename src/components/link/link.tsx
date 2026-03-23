import React from "react";
import { linkStyles } from "./link.styles";
import { cn } from "tailwind-variants";
import type { LinkProps } from "./link.types";

export const Link = (props: LinkProps) => {
  const { children, href, className, leftIcon, rightIcon, color, disabled, ...rest } = props;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLAnchorElement>) {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      {...rest}
      className={cn(linkStyles({ color }), className)}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </a>
  );
};
