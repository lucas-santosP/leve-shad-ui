import type { Meta, StoryObj } from "@storybook/react-vite"
import { Link } from "@/components/link"
import { linkStyles } from "@/components/link.styles"

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    className: { control: { disable: true } },
    disabled: { type: "boolean" },
    children: { type: "string" },
    color: {
      control: { type: "select" },
      options: Object.keys(linkStyles.variants.color),
      description: "Link color",
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: "#",
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    leftIcon: "👍",
    target: "_blank",
  },
}

export const Disabled: Story = {
  args: {
    children: "Heading text",
    href: "#",
    disabled: true,
  },
}
