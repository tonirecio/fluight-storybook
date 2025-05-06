import { SegmentsFilter } from "fluight-core";
import { action } from "@storybook/addon-actions";

export default {
  title: "Form/SegmentsFilter",
  component: SegmentsFilter,
  parameters: {
    docs: {
      description: {
        component: "This component shows the components Location (Origin, Destination), DatePicker, TimePicker all together. Also you can add more segments, and delete them as well.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    dataTestId: "segments-filter",
    onSegmentsSelected: action("onSegmentsSelected"),
  },
};
