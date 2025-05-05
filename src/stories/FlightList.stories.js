import { action } from "@storybook/addon-actions";
import { FlightList } from "fluight-core";
export default {
  title: "Example/FlightList",
  component: FlightList,
  tags: ["autodocs"],
};

const mockRoutes = [
  {
    routeId: "1",
    fares: [
      { price: 100, currency: "USD", cabinClass: "Economy", refundable: false },
      { price: 120, currency: "USD", cabinClass: "Economy", refundable: true },
    ],
    flights: [
      {
        flightNumber: "SK123",
        departureTime: "2025-05-10T08:00:00Z",
        arrivalTime: "2025-05-10T10:00:00Z",
        origin: "SCL",
        destination: "LIM",
        operatedBy: "Sky Airlines",
        duration: "2h",
      },
    ],
  },
  {
    routeId: "2",
    fares: [
      { price: 150, currency: "USD", cabinClass: "Business", refundable: true },
      { price: 170, currency: "USD", cabinClass: "Business", refundable: false },
    ],
    flights: [
      {
        flightNumber: "SK456",
        departureTime: "2025-05-10T09:00:00Z",
        arrivalTime: "2025-05-10T11:30:00Z",
        origin: "SCL",
        destination: "LIM",
        operatedBy: "Sky Airlines",
        duration: "2h 30m",
      },
    ],
  },
  {
    routeId: "3",
    fares: [
      { price: 80, currency: "USD", cabinClass: "Economy", refundable: false },
      { price: 90, currency: "USD", cabinClass: "Economy", refundable: true },
    ],
    flights: [
      {
        flightNumber: "SK789",
        departureTime: "2025-05-10T07:30:00Z",
        arrivalTime: "2025-05-10T09:30:00Z",
        origin: "SCL",
        destination: "LIM",
        operatedBy: "Sky Airlines",
        duration: "2h",
      },
    ],
  },
];

export const Default = {
  args: {
    routes: mockRoutes,
    selectCard: action("selectCard"),
  },
};
