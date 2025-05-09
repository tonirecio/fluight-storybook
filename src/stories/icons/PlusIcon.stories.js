import { PlusIcon } from "fluight-core";

export default {
  title: "Icons/PlusIcon",
  component: PlusIcon,
  parameters: {
    docs: {
      description: {
        component: "Icon to display addition actions. It shows a plus symbol.",
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
