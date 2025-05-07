import { EmissionsBreakdownTable } from "fluight-core";

export default {
  title: "Details/EmissionsBreakdownTable",
  component: EmissionsBreakdownTable,
  parameters: {
    docs: {
      description: {
        component: "Displays CO2 emissions for the current journey compared to typical values on the same route.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Current = {
    args: {
      averageEmissions: null,
      currentEmissions: 100.25,
      testId: "emissions-breakdown-table",
    },
  };
  
  export const Average = {
    args: {
      averageEmissions: 100.25,
      currentEmissions: null,
    },
  };
  
  export const Typical = {
    args: {
      averageEmissions: 85.5,
      currentEmissions: 85.5,
    },
  };
  
  export const HigherEmissions = {
    args: {
      averageEmissions: 90.5,
      currentEmissions: 120.75,
    },
  };
  
  export const LowerEmissions = {
    args: {
      averageEmissions: 95.5,
      currentEmissions: 75.0,
    },
  };
  
  export const NoEmissions = {
    args: {
      averageEmissions: null,
      currentEmissions: null,
    },
  };
  
