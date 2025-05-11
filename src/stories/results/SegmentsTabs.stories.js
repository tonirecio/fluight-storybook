import { SegmentsTabs } from "fluight-core";

export default {
  title: "Results/SegmentsTabs",
  component: SegmentsTabs,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    tabs: [
      { departure: "BCN", arrival: "MAD", day: "05 Nov" },
      { departure: "MAD", arrival: "BCN", day: "20 Nov" },
      { departure: "JFK", arrival: "LED", day: "01 Oct" },
    ],
    selectedTab: 0,
    onTabClick: (index) => {
      console.log("Selected tab index:", index);
    },
  },
};
