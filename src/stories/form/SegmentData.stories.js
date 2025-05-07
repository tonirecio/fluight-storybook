import { SegmentData } from "fluight-core";
import { action } from "@storybook/addon-actions";

export default {
  title: "Form/SegmentData",
  component: SegmentData,
  parameters: {
    docs: {
      description: {
        component: "This component shows you an example default value and the basic behaviour of the 4 components together.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    originDefault: {
      code: "SCL",
      city: "Santiago",
      country: "Chile",
      airportName: "Arturo Merino Benítez",
      description: "Santiago, Chile - SCL",
      type: "airport",
      icon: "airport-icon.png",
    },
    destinationDefault: {
      code: "LIM",
      city: "Lima",
      country: "Peru",
      airportName: "Jorge Chávez",
      description: "Lima, Peru - LIM",
      type: "airport",
      icon: "airport-icon.png",
    },
    dateTimeDefault: new Date("2025-06-15T10:30:00Z"),
    onOriginLocationSelected: action("onOriginLocationSelected"),
    onDestinationLocationSelected: action("onDestinationLocationSelected"),
    onDateSelected: action("onDateSelected"),
    onTimeSelected: action("onTimeSelected"),
  },
};
