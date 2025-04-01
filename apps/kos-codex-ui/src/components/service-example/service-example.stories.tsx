import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { ServiceExample } from "./service-example";

type Story = StoryObj<typeof ServiceExample>;

const meta: Meta<typeof ServiceExample> = {
  component: ServiceExample,
  title: "components/ServiceExample",
  tags: ["!dev", "!autodocs"],
};

export default meta;

export const ServiceExampleStory: Story = {};
