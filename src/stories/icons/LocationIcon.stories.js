import { LocationIcon } from "fluight-core";

export default {
  title: "Icons/LocationIcon",
  component: LocationIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to display on components that require location. It shows a location symbol.",
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
