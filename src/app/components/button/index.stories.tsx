import type { Meta, StoryObj } from "@storybook/react";
import Button from "./";
import "./style.css";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    type: "button",
    children: "Button Text",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "success", "alert", "disabled"],
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    children: {
      control: { type: "text" },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

type Button = StoryObj<typeof meta>;

export const Default: Button = {
  render: (args) => {
    return (
      <div className="p-10">
        <Button {...args}>{args.children}</Button>;
      </div>
    );
  },
};

export default meta;
