import { NoStopsIcon } from "fluight-core";

export default {
  title: "Icons/NoStopsIcon",
  component: NoStopsIcon,
  parameters: {
    docs: {
      description: {
        component: "Icon to to represent an itinerary without stops.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    color: "#000000",
    size: 24,
    strokeWidth: 1,
  },
};
