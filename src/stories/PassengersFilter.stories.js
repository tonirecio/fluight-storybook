import { PassengersFilter,  } from "fluight-core";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/PassengersFilter",
  component: PassengersFilter,
  parameters: {
    docs: {
      description: {
        component: "This component allows you to select the number of passengers (1-9) and type (ADT, CHD, CMP). You can also add multiple passenger types at once using the '+' button and remove them using the 'x' button.",
      },
    },
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Primary = {
  args:{
    id: "selector-0",
    number: 1,
    type: "ADT"
  }
};
