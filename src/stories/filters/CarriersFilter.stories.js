import { CarriersFilter } from "fluight-core";

export default {
  title: "Filters/CarriersFilter",
  component: CarriersFilter,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {},
};

export const onGetData = {
  args: {
    ...Default.args,
    onGetData: () => {
      return [
        { code: "IB", name: "Iberia" },
        { code: "AA", name: "American Airlines" },
        { code: "BA", name: "British Airways" },
        { code: "AF", name: "Air France" },
        { code: "LH", name: "Lufthansa" },
      ];
    },
  },
};

export const onCarriersFilterSelected = {
  args: {
    ...Default.args,
    onCarriersFilterSelected: (selectedCarriers) => {
      window.alert("Selected carriers: " + JSON.stringify(selectedCarriers));
    },
  },
};

export const onCarriersFilterModifierSelected = {
  args: {
    ...Default.args,
    onCarriersFilterModifierSelected: (selectedCarriers) => {
      window.alert(
        "Selected carriers modifier: " + JSON.stringify(selectedCarriers)
      );
    },
  },
};
