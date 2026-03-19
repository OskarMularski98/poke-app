import type { Meta, StoryObj } from "@storybook/nextjs";

import BaseButton from "@/components/BaseButton/BaseButton";

const meta = {
  component: BaseButton,
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {};
