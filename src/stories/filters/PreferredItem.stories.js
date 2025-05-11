import { PreferredItem } from "fluight-core";

export default {
  title: "Filters/PreferredItem",
  component: PreferredItem,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    itemCode: "IB",
  },
};

export const onItemDeleted = {
  args: {
    ...Default.args,
    onItemDeleted: (item) => {
      window.alert("Item remove event: " + item);
    },
  },
};
