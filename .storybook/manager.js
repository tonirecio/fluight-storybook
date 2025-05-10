import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import FluightTheme from "./FluightTheme";

addons.setConfig({
  theme: FluightTheme,
});
