import { TwoStopsIcon } from "fluight-core";

export default {
  title: "Icons/TwoStopsIcon",
  component: TwoStopsIcon,
  parameters: {
    docs: {
      description: {
        component: "Icon to to represent an itinerary with two (or more) stops.",
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
