import { Meta, StoryObj } from "@storybook/nextjs";
import UpdateNameForm from ".";

const meta: Meta<typeof UpdateNameForm> = {
  title: "components/pages/UpdateNameForm",
  component: UpdateNameForm,
};
export default meta;

type Story = StoryObj<typeof UpdateNameForm>;

export const Default: Story = {
  render: () => <UpdateNameForm />,
};
