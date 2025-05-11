import { CarrierLogo } from "fluight-core";

export default {
  title: "Results/CarrierLogo",
  component: CarrierLogo,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    carrierCode: "IB",
    carrierShortName: "Iberia",
    showTitle: true,
    width: 100,
    testId: "carrier-logo",
  },
};
