import { JourneyAirportDetail } from "fluight-core";

export default {
  title: "Details/JourneyAirportDetail",
  component: JourneyAirportDetail,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    journeyBreakdownItemIndex: 0,
    date: new Date("2023-10-01T16:00:00Z"),
    departureDone: false,
    differenceArrival: "",
    cityName: "Barcelona",
    airportName: "Barcelona El Prat",
    airportCode: "BCN",
    terminal: "T1",
    flyingTime: "2h 30m",
  },
};
