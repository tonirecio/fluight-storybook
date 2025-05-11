import { SegmentsFilter } from "fluight-core";
import { action } from "@storybook/addon-actions";

export default {
  title: "Filters/SegmentsFilter",
  component: SegmentsFilter,
  parameters: {
    docs: {
      description: {
        component: `The SegmentsFilter component is designed to manage and display a list of flight segments. It allows users to dynamically add, update, and delete flight segments using the SegmentFilter component.`,
      },
    },
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
