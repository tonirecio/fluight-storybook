import { OneStopIcon } from "fluight-core";

export default {
  title: "Icons/OneStopIcon",
  component: OneStopIcon,
  parameters: {
    docs: {
      description: {
        component: "Icon to to represent an itinerary with one stop.",
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
