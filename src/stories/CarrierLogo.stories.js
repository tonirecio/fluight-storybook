import { CarrierLogo } from "fluight-core";

export default {
  title: "Example/CarrierLogo",
  component: CarrierLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    carrierCode: "IB",
    carrierShortName: "Iberia",
    showTitle: true,
    width: 100,
    testId: "carrier-logo",
  },
};
