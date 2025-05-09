import { ClockIcon } from "fluight-core";

export default {
  title: "Icons/ClockIcon",
  component: ClockIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to display the exclamation symbol, surrounded by a circle. It is used to indicate that an action require attention by the user.",
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
