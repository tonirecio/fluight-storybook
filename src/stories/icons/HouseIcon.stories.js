import { HouseIcon } from "fluight-core";

export default {
  title: "Icons/HouseIcon",
  component: HouseIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to display on location selectors. It shows a house symbol.",
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
  },
};
