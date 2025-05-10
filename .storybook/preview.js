import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { appTheme } from "../src/themes/app-theme";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: #000000
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      app: appTheme,
    },
    defaultTheme: "app",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles,
  }),
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
