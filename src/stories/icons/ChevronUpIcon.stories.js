import { ChevronUpIcon } from "fluight-core";

export default {
  title: "Icons/ChevronUpIcon",
  component: ChevronUpIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to display on components with drop-down elements. Deply on the direction of the arrow, it indicates if the element is open or closed.",
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
