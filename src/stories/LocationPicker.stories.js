import { LocationPicker } from "fluight-core";
import locationData from "../../../fluight-core/src/components/data/LocationPicker.json";

export default {
  title: "Example/LocationPicker",
  component: LocationPicker,
  parameters: {
    docs: {
      description: {
        component: "This component allows you to select a location and filters results while typing.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Location = {
  args: {
    previousSearches: locationData.slice(0, 5),
    selectedLocation: locationData[0],
    placeholderValue: "Origin",
    dataTestId: "location-picker",
    onGetData: (filter) => {
      return locationData.filter((item) =>
        item.code.toLowerCase().includes(filter.toLowerCase()) ||
        item.city.toLowerCase().includes(filter.toLowerCase()) ||
        item.country.toLowerCase().includes(filter.toLowerCase()) ||
        item.airportName.toLowerCase().includes(filter.toLowerCase())
      );
    },
    onLocationSelected: (location) => {
      console.log("Ubicación seleccionada:", location);
    },
  },
};
