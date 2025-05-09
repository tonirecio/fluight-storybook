import { CurrencyIcon } from "fluight-core";

export default {
  title: "Icons/CurrencyIcon",
  component: CurrencyIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon to indicate information related with economics of finance.",
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
