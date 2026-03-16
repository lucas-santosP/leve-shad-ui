import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/input";
import { Icons } from "@/libs/icons";

const meta = {
  title: "Components/Input",
  component: Input,
  render: (args) => {
    return (
      <div style={{ width: "350px" }}>
        <Input {...args} />
      </div>
    );
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: { disable: true } },
    leftIcon: { control: { disable: true } },
    rightIcon: { control: { disable: true } },
    disabled: { type: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your email",
    rightIcon: <Icons.Eye />,
    id: "email",
    disabled: false,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Type your email",
    rightIcon: <Icons.Mail />,
    id: "email",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Type your email",
    rightIcon: <Icons.Mail />,
    id: "email",
    readOnly: true,
    value: "email@email.com",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Type your email",
    rightIcon: <Icons.Mail />,
    id: "email",
    "aria-invalid": true,
    required: true,
  },
};

export const ErrorReadOnly: Story = {
  args: {
    placeholder: "Type your email",
    rightIcon: <Icons.Mail />,
    id: "email",
    "aria-invalid": true,
    disabled: true,
    value: "wasd",
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: "Type here",
    rightIcon: <Icons.Calendar />,
    id: "email",
  },
};

export const TwoIcons: Story = {
  args: {
    placeholder: "Type your email",
    leftIcon: <Icons.Calendar />,
    rightIcon: <Icons.Mail />,
    id: "email",
  },
};
