import { SegmentFilter } from "fluight-core";

export default {
  title: "Filters/SegmentFilter",
  component: SegmentFilter,
  parameters: {
    docs: {
      description: {
        component: `This component shows you de default behaviour of the component with the delete x button. Can't use it because allways there must be one segment.`,
      },
    },
  },
  layout: "centered",
};

const mockSegment = {
  id: 1,
  origin: {
    code: "SCL",
    city: "Santiago",
    country: "Chile",
    airportName: "Arturo Merino Benítez",
    description: "Santiago, Chile - SCL",
    type: "airport",
    icon: "airport-icon.png",
  },
  destination: {
    code: "LIM",
    city: "Lima",
    country: "Peru",
    airportName: "Jorge Chávez",
    description: "Lima, Peru - LIM",
    type: "airport",
    icon: "airport-icon.png",
  },
  date: new Date("2025-07-01T00:00:00Z"),
  time: new Date("2025-07-01T13:45:00Z"),
};

export const Default = {
  args: {
    index: 0,
    segment: mockSegment,
    isDeleteButtonEnabled: false,
  },
};

export const onSegmentSelected = {
  args: {
    ...Default.args,
    isDeleteButtonEnabled: false,
    onSegmentSelected: (segment) => {
      window.alert("Segment selected: " + JSON.stringify(segment));
    },
  },
};

export const onDeleteSegment = {
  args: {
    ...Default.args,
    isDeleteButtonEnabled: true,
    onDeleteSegment: (segment) => {
      window.alert("Segment delete request: " + JSON.stringify(segment));
    },
  },
};

