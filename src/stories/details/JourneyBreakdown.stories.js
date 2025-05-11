import { JourneyBreakdown } from "fluight-core";

export default {
  title: "Details/JourneyBreakdown",
  component: JourneyBreakdown,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    journey: {
      flights: [
        {
          origin: {
            city: "Madrid",
            code: "MAD",
            country: "Spain",
            airportName: "Madrid Barajas",
            description: "Madrid Barajas Airport",
            type: "airport",
            icon: "airport",
          },
          destination: {
            city: "Barcelona",
            code: "BCN",
            country: "Spain",
            airportName: "Barcelona El Prat",
            description: "Barcelona El Prat Airport",
            type: "airport",
            icon: "airport",
          },
          code: "IB1234",
          aircraft: "Airbus A320",
          arrival: { time: "2023-10-01T14:00:00Z", terminal: "T1" },
          departure: { time: "2023-10-01T12:00:00Z", terminal: "T4" },
          operatedBy: { code: "LH", name: "Lufthansa" },
        },
      ],
      carrier: { name: "Iberia", code: "IB" },
      layovers: ["MAD"],
    },
    selectedFare: {
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
  },
};
