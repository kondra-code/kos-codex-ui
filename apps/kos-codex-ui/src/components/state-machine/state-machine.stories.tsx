import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import StateMachine from "./state-machine";

type Story = StoryObj<typeof StateMachine>;

const meta: Meta<typeof StateMachine> = {
  component: StateMachine,
  title: "components/StateMachine",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const StateMachineStory: Story = {};
