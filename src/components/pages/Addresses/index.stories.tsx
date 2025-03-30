import type { Address } from "@/types";
import { Meta, StoryObj } from "@storybook/react";
import { Addresses } from ".";

const meta: Meta<typeof Addresses> = {
  title: "components/pages/Addresses",
  component: Addresses,
};
export default meta;

type Story = StoryObj<typeof Addresses>;

const sampleAddresses: Address[] = [
  {
    address1: "高知県",
    address2: "南国市",
    address3: "蛍が丘",
    kana1: "ｺｳﾁｹﾝ",
    kana2: "ﾅﾝｺｸｼ",
    kana3: "ﾎﾀﾙｶﾞｵｶ",
    prefcode: "39",
    zipcode: "7830060",
  },
];

export const Default: Story = {
  render: (args) => <Addresses {...args} />,
  args: {
    data: sampleAddresses,
  },
};

export const Empty: Story = {
  render: (args) => <Addresses {...args} />,
  args: {
    data: [],
  },
};
