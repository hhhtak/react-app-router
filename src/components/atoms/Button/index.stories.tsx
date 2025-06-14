import { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "components/atoms/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "hogehoge",
  },
};

export const Small: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "hogehoge",
    size: "small",
  },
};

export const Disabled: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "hogehoge",
    disabled: true,
  },
};
