import { DatePicker } from "fluight-core";

export default {
  title: "Form/DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: "This component allows you to select a date using a native date input.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    dateDefault: new Date(),
    dataTestId: "date-picker",
    onDateSelected: (selectedDate) => {
      console.log("Fecha seleccionada:", selectedDate);
    },
  },
};
