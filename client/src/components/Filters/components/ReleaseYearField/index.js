import { Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import TextField from "@mui/material/TextField";

export const ReleaseYearField = () => {
  return (
    <Field
        name="primaryReleaseYear"
        render={({ input }) => (
        <TextField
            type="number"
            size="small"
            label={<FormattedMessage id="filters.release_year"/>} 
            minvalue={1800}
            maxvalue={2030}
            {...input}
        />
    )}
  />
  );
};
