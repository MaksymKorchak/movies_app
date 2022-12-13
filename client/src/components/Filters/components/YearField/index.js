import { Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import TextField from "@mui/material/TextField";

export const YearField = () => {
  return (
    <Field
      name="year"
      render={({ input }) => (
        <TextField
            type="number"
            label={<FormattedMessage id="filters.year"/>} 
            minvalue={1800}
            maxvalue={2030}
            {...input}
        />
      )}
    />
  );
};
