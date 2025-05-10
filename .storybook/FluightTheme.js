import { create } from "@storybook/theming";

export default create({
  base: "light",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "My custom Storybook",
  brandUrl: "https://example.com",
  brandImage: "./logo.png",
  brandTarget: "_self",

  //
  colorPrimary: "#56B4E3",
  colorSecondary: "#969332",

  // UI
  appBg: "rgba(150 147 50 / 0.05)",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#CBCBCB",
  appBorderRadius: 4,

  // Text colors
  textColor: "#000000",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barHoverColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,
});
