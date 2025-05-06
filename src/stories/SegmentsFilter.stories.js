import { SegmentsFilter } from "fluight-core";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/SegmentsFilter",
  component: SegmentsFilter,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    dataTestId: "segments-filter",
    onSegmentsSelected: action("onSegmentsSelected"),
  },
};
