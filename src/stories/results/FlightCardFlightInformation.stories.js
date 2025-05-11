import { FlightCardFlightInformation } from "fluight-core";

export default {
  title: "Results/FlightCardFlightInformation",
  component: FlightCardFlightInformation,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    fares: [
      {
        name: "Optima",
        price: 5891.68,
        basis: "O·OKN0Z0M9",
        currentEmissions: 155,
        typicalEmissions: 160,
        properties: {
          fareType: "Airline Private",
          contentSource: "Traditional",
          carryOnBag: "included",
          checkedBag: "included",
          refundable: "included",
          changeable: "included",
          mileageAccrual: "included",
          usbPower: "unavailable",
          priorityCheckIn: "included",
          priorityBoarding: "included",
          priorityBaggage: "unavailable",
          fastTrack: "included",
          loungeAccess: "included",
          upgrade: null,
          transferService: null,
          personalItem: null,
          earlySeatSelection: "chargable",
          extraLegroom: "unavailable",
          premiumSeat: null,
          lieFlatSeat: null,
          mealBeverages: null,
          wifiAccess: null,
          inFlightEntertainment: "included",
        },
      },
    ],
    airline: {
      code: "IB",
      name: "Iberia",
    },
    operatedBy: {
      code: "LH",
      name: "Lufthansa",
    },
    flights: [
      {
        origin: {
          code: "BCN",
          city: "Barcelona",
          country: "Spain",
          airportName: "All Airports",
          description: "Barcelona, Spain (All Airports)",
          type: "city",
          icon: "house",
        },
        destination: {},
        code: "IB4111",
        aircraft: "Boeing 777-200",
        arrival: { time: "2024-11-05T07:50:00.000Z", terminal: "1" },
        departure: { time: "2024-11-05T06:10:00.000Z", terminal: "2A" },
        operatedBy: { code: "IB", name: "Iberia" },
      },
      {
        origin: {},
        destination: {
          code: "MAD",
          city: "Madrid",
          country: "Spain",
          airportName: "All Airports",
          description: "Madrid, Spain (All Airports)",
          type: "city",
          icon: "house",
        },
        code: "IB5555",
        aircraft: "Boeing 777-200",
        arrival: { time: "2024-11-05T10:00:00.000Z", terminal: "1" },
        departure: { time: "2024-10-01T08:40:00.000Z", terminal: "2A" },
        operatedBy: { code: "IB", name: "Iberia" },
      },
    ],
    index: 0,
  },
};
