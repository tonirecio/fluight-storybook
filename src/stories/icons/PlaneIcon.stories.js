import { PlaneIcon } from "fluight-core";

export default {
  title: "Icons/PlaneIcon",
  component: PlaneIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to display on components that require flight information. It shows a plane symbol.",
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
