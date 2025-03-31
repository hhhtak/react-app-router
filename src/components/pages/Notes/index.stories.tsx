import { Note } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { Notes } from ".";

const meta: Meta<typeof Notes> = {
  title: "Components/Pages/Notes",
  component: Notes,
  argTypes: {
    notes: {
      description: "表示するノートの配列",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notes>;

// ダミーデータ
const dummyNotes: Note[] = [
  {
    key: "1",
    id: 1,
    content: "ノート1の内容",
    updated: new Date().toISOString(),
    created: new Date().toISOString(),
  },
  {
    key: "2",
    id: 2,
    content: "ノート2の内容",
    updated: new Date().toISOString(),
    created: new Date().toISOString(),
  },
  {
    key: "3",
    id: 3,
    content: "ノート3の内容",
    updated: new Date().toISOString(),
    created: new Date().toISOString(),
  },
];

export const Default: Story = {
  args: {
    notes: dummyNotes,
  },
};

export const Empty: Story = {
  args: {
    notes: [],
  },
};
