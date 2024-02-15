import { themes } from '@storybook/theming'
import { initialize, mswDecorator } from 'msw-storybook-addon';
import type { Preview } from "@storybook/react";
import '../src/app/globals.css';

initialize();

export const decorators = [
  mswDecorator
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
  },
};

export default preview;
