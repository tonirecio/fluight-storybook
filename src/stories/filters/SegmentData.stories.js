import { SegmentData } from "fluight-core";
import { action } from "@storybook/addon-actions";

export default {
  title: "Filters/SegmentData",
  component: SegmentData,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    originDefault: {},
    destinationDefault: {},
    dateTimeDefault: new Date("2025-06-15T10:30:00Z"),
  },
};

export const onLocationSelected = {
  args: {
    ...Default.args,
    onOriginLocationSelected: (location) => {
      window.alert("Origin location selected: " + JSON.stringify(location));
    },
    onDestinationLocationSelected: (location) => {
      window.alert(
        "Destination location selected: " + JSON.stringify(location)
      );
    },
    onDateSelected: action("onDateSelected"),
    onTimeSelected: action("onTimeSelected"),
  },
};

export const onDateTimeSelected = {
  args: {
    ...Default.args,
    onDateSelected: (date) => {
      window.alert("Date selected: " + date);
    },
    onTimeSelected: (time) => {
      window.alert("Time selected: " + time);
    },
  },
};
