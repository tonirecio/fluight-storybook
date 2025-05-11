import { DatePicker } from "fluight-core";

export default {
  title: "Filters/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    dateDefault: new Date(),
    dataTestId: "date-picker",
    onDateSelected: (selectedDate) => {
      window.alert("Selected date: " + selectedDate);
    },
  },
};

export const onDateSelected = {
  args: {
    ...Default.args,
    onDateSelected: (selectedDate) => {
      window.alert("Selected date: " + selectedDate);
    },
  },
};
