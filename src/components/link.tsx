import React from "react"
import clsx from "clsx"
import { linkStyles, type LinkStylesProps } from "./link.styles"

/**
 * Link component props.
 *
 * @property {string} [className] - Additional CSS classes.
 * @property {React.ReactNode} [children] - Text node children.
 * @property {string} href - Link href attribute.
 * @property {ReactNode} [leftIcon] - Left icon element.
 * @property {ReactNode} [rightIcon] - Right icon element.
 */
export interface LinkProps extends Omit<React.ComponentProps<"a">, "color">, LinkStylesProps {
  /**
   * Additional CSS classes.
   */
  className?: string
  /**
   * Text node children.
   */
  children?: React.ReactNode
  /**
   * Link href attribute.
   */
  href: string
  /**
   * Left icon element.
   */
  leftIcon?: React.ReactNode
  /**
   * Right icon element.
   */
  rightIcon?: React.ReactNode
  /**
   * Disabled state.
   */
  disabled?: boolean
}

export const Link = (props: LinkProps) => {
  const { children, href, className, leftIcon, rightIcon, color, disabled, ...rest } = props

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (disabled) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLAnchorElement>) {
    if (disabled) {
      e.preventDefault()
      e.stopPropagation()
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
      className={clsx(linkStyles({ color }), className)}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </a>
  )
}
