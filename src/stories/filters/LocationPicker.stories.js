import { LocationPicker } from "fluight-core";

export default {
  title: "Filters/LocationPicker",
  component: LocationPicker,
  parameters: {
    layout: "centered",
  },
};

export const Origin = {
  args: {
    previousSearches: [],
    selectedLocation: null,
    placeholderValue: "Origin",
    dataTestId: "origin-location-picker",
    onLocationSelected: (location) => {
      window.alert("Selected location: " + JSON.stringify(location));
    },
  },
};

export const Destination = {
  args: {
    ...Origin.args,
    placeholderValue: "Destination",
    dataTestId: "destination-location-picker",
  },
};

export const PreviousSearch = {
  args: {
    ...Origin.args,
    previousSearches: [
      {
        code: "MAD",
        city: "Madrid",
        country: "Spain",
        airportName: "All Airports",
        description: "Madrid, Spain (All Airports)",
        type: "city",
        icon: "house",
      },
      {
        code: "BCN",
        city: "Barcelona",
        country: "Spain",
        airportName: "All Airports",
        description: "Barcelona, Spain (All Airports)",
        type: "city",
        icon: "house",
      },
    ],
  },
};

export const SelectedLocation = {
  args: {
    ...Origin.args,
    previousSearches: [],
    selectedLocation: {
      code: "MAD",
      city: "Madrid",
      country: "Spain",
      airportName: "All Airports",
      description: "Madrid, Spain (All Airports)",
      type: "city",
      icon: "house",
    },
  },
};

export const OnGetData = {
  args: {
    ...Origin.args,
    onGetData: () => {
      return [
        {
          code: "Test1",
          city: "City Test 1",
          country: "Spain",
          airportName: "All Airports",
          description: "Test 1, Spain (All Airports)",
          type: "city",
          icon: "house",
        },
        {
          code: "Test 2",
          city: "City Test 2",
          country: "Spain",
          airportName: "All Airports",
          description: "Test 2, Spain (All Airports)",
          type: "city",
          icon: "house",
        },
      ];
    },
  },
};
