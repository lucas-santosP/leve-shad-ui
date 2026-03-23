import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "tailwind-variants";
import { avatarStyles } from "./avatar.styles";
import type { AvatarProps } from "./avatar.types";

function Avatar({ src, fallback, className, size = "md" }: AvatarProps) {
  const styles = avatarStyles({ size });

  return (
    <AvatarPrimitive.Root data-slot="avatar" className={cn(styles.root(), className)}>
      <AvatarPrimitive.Image draggable={false} src={src} className={styles.image()} />
      <AvatarPrimitive.Fallback className={styles.fallback()}>{fallback}</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

export { Avatar };
