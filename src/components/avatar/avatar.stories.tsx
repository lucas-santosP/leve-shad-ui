import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./avatar";
import { avatarStyles } from "./avatar.styles";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    className: { control: { disable: true } },
    size: {
      control: { type: "select" },
      options: Object.keys(avatarStyles.variants.size),
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    fallback: "CN",
  },
};

export const ImageSizes: Story = {
  render: (args) => {
    return (
      <div className="flex items-center gap-4">
        <Avatar {...args} size="sm" src="https://github.com/shadcn.png" />
        <Avatar {...args} size="md" src="https://github.com/shadcn.png" />
        <Avatar {...args} size="lg" src="https://github.com/shadcn.png" />
      </div>
    );
  },
};

export const FallbackSizes: Story = {
  render: (args) => {
    return (
      <div className="flex items-center gap-4">
        <Avatar {...args} fallback="JS" size="sm" />
        <Avatar {...args} fallback="JS" size="md" />
        <Avatar {...args} fallback="JS" size="lg" />
      </div>
    );
  },
};
