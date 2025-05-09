import { CrossMarkIcon } from "fluight-core";

export default {
  title: "Icons/CrossMarkIcon",
  component: CrossMarkIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to indicate that an action will close a modal or a popover. It is used to indicate that the user can close the current view.",
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
