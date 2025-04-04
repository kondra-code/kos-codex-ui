import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import Timer from "./timer";

type Story = StoryObj<typeof Timer>;

const meta: Meta<typeof Timer> = {
  component: Timer,
  title: "components/Timer",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const TimerStory: Story = {};
