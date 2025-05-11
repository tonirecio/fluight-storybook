import { FlightLayoverBanner } from "fluight-core";

export default {
  title: "Details/FlightLayoverBanner",
  component: FlightLayoverBanner,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    arrivalTime: new Date("2023-10-01T16:00:00Z"),
    departureTime: new Date("2023-10-01T14:00:00Z"),
    layoverCity: "Madrid",
  },
};

export const NoTimeInfo = {
  args: {
    arrivalTime: "",
    departureTime: "",
    layoverCity: "Madrid",
  },
};
