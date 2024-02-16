import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  args: {
    logoLayout: true,
    sloganLayout: true,
    width: 140,
    height: 40,
    textSize: 20,
    comaSize: 4,
  },
  argTypes: {
    logoLayout: {
        control: { type: 'boolean' },
        options: [true, false],
    },
    sloganLayout: {
        control: { type: 'boolean' },
        options: [true, false],
    },
    width: {
        control: { type: 'number' },
    },
    height: {
        control: { type: 'number' },
    },
    textSize: {
        control: { type: 'number' },
    },
    comaSize: {
        control: { type: 'number' },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

type Logo = StoryObj<typeof meta>;

export const Default: Logo = {
    
    render: (args: LogoProps) => {
        return (
          <div className="p-10">
            <Logo {...args} />
          </div>
        );
    },
};

export default meta;
