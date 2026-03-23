import type { AvatarStylesProps } from "./avatar.styles";

export interface AvatarProps extends AvatarStylesProps {
  /** Image source URL. */
  src?: string;
  /** Fallback content shown when the image fails to load or is not provided. Typically initials. */
  fallback?: React.ReactNode;
  /** Additional CSS classes applied to the root element. */
  className?: string;
}
