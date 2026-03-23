import * as React from "react";
import type { InputStylesProps } from "./input.styles";

export interface InputProps extends React.ComponentProps<"input">, InputStylesProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
