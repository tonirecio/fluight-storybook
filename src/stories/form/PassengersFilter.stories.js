import { PassengersFilter } from "fluight-core";

export default {
  title: "Form/PassengersFilter",
  component: PassengersFilter,
  parameters: {
    docs: {
      description: {
        component: "This component allows you to select the number of passengers (1-9) and type (ADT, CHD, CMP). You can also add multiple passenger types at once using the '+' button and remove them using the 'x' button.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    id: "selector-0",
    number: 1,
    type: "ADT",
  },
};
