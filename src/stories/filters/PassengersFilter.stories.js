import { PassengersFilter } from "fluight-core";

export default {
  title: "Filters/PassengersFilter",
  component: PassengersFilter,
  parameters: {
    layout: "centered",
  },  
};

export const Default = {
  args: {
  },
};

export const onPassengersSelected = {
  args: {
    ...Default.args,
    onPassengersSelected: (passengers) => {
      window.alert("Passengers selected: " + JSON.stringify(passengers));
    },
  },
};
