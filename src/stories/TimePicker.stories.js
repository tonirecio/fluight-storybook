import { TimePicker } from "fluight-core";

export default {
  title: "Example/TimePicker",
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component: "This component allows you to pick any time you want",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    timeDefault: new Date(),
    dataTestId: "time-component",
    onTimeSelected: (selectedTime) => {
      console.log("Time Selected:", selectedTime);
    },
  },
};
