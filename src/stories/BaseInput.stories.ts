import type { Meta, StoryObj } from "@storybook/nextjs";

import BaseInput from "@/components/BaseInput/BaseInput";

const meta = {
  component: BaseInput,
} satisfies Meta<typeof BaseInput>;

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {};
