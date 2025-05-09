import { SegmentsTabs } from "fluight-core";

export default {
  title: "Form/SegmentsTabs",
  component: SegmentsTabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This component allows you to select an airline from the deployable and choose if it is 'preferred', 'exclude', 'only' or 'all' at the moment of the search",
      },
    },
  },
  tags: ["autodocs"],
};

export const Primary = {
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
