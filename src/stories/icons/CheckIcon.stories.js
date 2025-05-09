import { CheckIcon } from "fluight-core";

export default {
  title: "Icons/CheckIcon",
  component: CheckIcon,
  parameters: {
    docs: {
      description: {
        component: "Icon to display the check symbol.",
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
