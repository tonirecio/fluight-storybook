import { FlightFareCode } from "fluight-core";

export default {
  title: "Details/FlightFareCode",
  component: FlightFareCode,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    journeyBreakdownItemIndex: 0,
    fareName: "Economy",
    fareCode: "Y·ECO",
  },
};
