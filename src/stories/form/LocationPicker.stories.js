import { LocationPicker } from "fluight-core";

export default {
  title: "Form/LocationPicker",
  component: LocationPicker,
  parameters: {
    docs: {
      description: {
        component:
          "This component allows you to select a location and filters results while typing.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Location = {
  args: {
    previousSearches: [],
    selectedLocation: null,
    placeholderValue: "Origin",
    dataTestId: "location-picker",
    onLocationSelected: (location) => {
      console.log("Ubicación seleccionada:", location);
    },
  },
};
