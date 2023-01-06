import { Counter, CounterProps } from "../Counter";

import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

type Story = StoryObj<CounterProps>;

export const Default: Story = {
  args: {
    initialValue: 12,
    theme: "default",
  },
};

export default {
  title: "Example/Counter",
  tags: ["autodocs"],
  /**
   * Here you need to render JSX for HMR work!
   *
   * render: Counter won't trigger HMR updates
   */
  render: (props) => <Counter {...props} />,
  argTypes: {
    initialValue: { control: "number" },
    theme: {
      options: ["default", "red"],
      control: { type: "radio" },
    },
  },
} as Meta<ComponentProps<typeof Counter>>;
