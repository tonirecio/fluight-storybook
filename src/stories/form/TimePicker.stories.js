import { TimePicker } from "fluight-core";

export default {
  title: "Filters/TimePicker",
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
      window.alert(
        "Time Selected: " +
          selectedTime
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })
            .replace(/:\d{2}$/, "")
      );
    },
  },
};
