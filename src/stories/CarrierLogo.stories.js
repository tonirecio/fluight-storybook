import { fn } from "@storybook/test";
import React from "react";
import { CarrierLogo } from "fluight-core";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/CarrierLogo",
  component: CarrierLogo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    carrierCode: "IB",
    carrierShortName: "Iberia",
    showTitle: true,
    width: 100,
    testId: "carrier-logo",
  },
};
