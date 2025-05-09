import { CalendarIcon } from "fluight-core";

export default {
  title: "Icons/CalendarIcon",
  component: CalendarIcon,
  parameters: {
    docs: {
      description: {
        component: "Icon to display on date selectors.",
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
