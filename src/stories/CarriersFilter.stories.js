import { CarriersFilter } from "fluight-core";

export default {
  title: "Form/CarriersFilter",
  component: CarriersFilter,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "This component allows you to select an airline from the deployable and choose if it is 'preferred', 'exclude', 'only' or 'all' at the moment of the search",
      },
    },
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    airlines: ["IB", "LO", "LH", "1I", "1T", "2B"],
    preference: ["Preferred", "Exclude", "Only", "All"]
  },
};
