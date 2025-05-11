import { TimePicker } from "fluight-core";

export default {
  title: "Filters/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    timeDefault: new Date(),
    dataTestId: "time-component",
  },
};

export const onTimeSelected = {
  args: {
    ...Default.args,
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
