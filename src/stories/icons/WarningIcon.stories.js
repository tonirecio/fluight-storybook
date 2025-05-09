import { WarningIcon } from "fluight-core";

export default {
  title: "Icons/WarningIcon",
  component: WarningIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to display on components that require a warning. It shows a warning symbol.",
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
