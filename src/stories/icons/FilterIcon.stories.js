import { FilterIcon } from "fluight-core";

export default {
  title: "Icons/FilterIcon",
  component: FilterIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to display on components that require filtering. It shows a funnel symbol.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    color: "#000000",
    size: 24    
  },
};
