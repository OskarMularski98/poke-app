import type { Meta, StoryObj } from "@storybook/nextjs";

import BaseButton from "@/components/BaseButton/BaseButton";

const meta = {
  component: BaseButton,
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interact with the links to see the route change events in the Actions panel.
export const Example: Story = {};
