import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { buttonStyles } from "./button.styles";
import { Icons } from "@/libs/icons";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: { control: { disable: true } },
    leftIcon: { control: { disable: true } },
    rightIcon: { control: { disable: true } },
    rounded: { control: { disable: true } },
    children: { control: { disable: true } },
    disabled: { type: "boolean" },
    variant: {
      control: { type: "select" },
      options: Object.keys(buttonStyles.variants.variant),
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    color: {
      control: { type: "select" },
      options: Object.keys(buttonStyles.variants.color),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Chat do time",
    rightIcon: <Icons.ChevronRight />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Chat do time",
    rightIcon: <Icons.ChevronRight />,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Chat do time",
    rightIcon: <Icons.ChevronRight />,
  },
};

export const Icon: Story = {
  args: {
    variant: "solid",
    children: <Icons.X />,
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: "solid",
    children: "Chat do time",
    rightIcon: <Icons.ChevronRight />,
    disabled: true,
  },
};
