import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import MultiFutures from "./multiple-futures";

type Story = StoryObj<typeof MultiFutures>;

const meta: Meta<typeof MultiFutures> = {
  component: MultiFutures,
  title: "components/MultiFutures",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const MultiFuturesStory: Story = {};
