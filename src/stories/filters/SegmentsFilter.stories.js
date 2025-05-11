import { SegmentsFilter } from "fluight-core";
import { action } from "@storybook/addon-actions";

export default {
  title: "Filters/SegmentsFilter",
  component: SegmentsFilter,
  parameters: {
  },
  layout: "centered",
};

export const Default = {
  args: {},
};

export const onSegmentsSelected = {
  args: {
    ...Default.args,
    onSegmentsSelected: (segment) => {
      window.alert("Segment selected: " + JSON.stringify(segment));
    },
  },
};
