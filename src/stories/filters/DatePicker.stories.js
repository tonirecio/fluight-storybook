import { DatePicker } from "fluight-core";

export default {
  title: "Filters/DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          "This component allows you to select a date using a native date input.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
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
