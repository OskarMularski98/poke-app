import type { Preview } from "@storybook/nextjs";
import "../styles/globals.css";
import { rubik } from "../src/fonts/fonts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className={rubik.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
