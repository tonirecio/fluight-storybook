import { SegmentFilter } from "fluight-core";
import locationData from "../../../fluight-core/src/components/data/LocationPicker.json"; // mock de ubicaciones

export default {
  title: "Example/SegmentFilter",
  component: SegmentFilter,
  parameters: {
    docs: {
      description: {
        component: "Allows the user to configure a flight segment including origin, destination, date, and time.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    index: 0,
    segment: {
      id: 1,
      origin: locationData[0],
      destination: locationData[1],
      date: new Date(),
      time: new Date(),
    },
    isDeleteButtonEnabled: true,
    dataTestId: "segment-filter",
    onGetOriginData: (filter) => {
      return locationData.filter((loc) => loc.city.toLowerCase().includes(filter.toLowerCase()) || loc.code.toLowerCase().includes(filter.toLowerCase()));
    },
    onGetDestinationData: (filter) => {
      return locationData.filter((loc) => loc.city.toLowerCase().includes(filter.toLowerCase()) || loc.code.toLowerCase().includes(filter.toLowerCase()));
    },
    onSegmentSelected: (segment) => {
      console.log("Segment updated:", segment);
    },
    onDeleteSegment: (id) => {
      console.log("Segment deleted:", id);
    },
  },
};
