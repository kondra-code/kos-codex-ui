import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import TimerWithWarning from "./timer-with-warning";

type Story = StoryObj<typeof TimerWithWarning>;

const meta: Meta<typeof TimerWithWarning> = {
  component: TimerWithWarning,
  title: "components/TimerWithWarning",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const TimerWithWarningStory: Story = {};
