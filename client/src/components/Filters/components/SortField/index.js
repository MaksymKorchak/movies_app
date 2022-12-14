import { Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { SORT_OPTIONS } from "../../../../constants";

export const SortField = () => {
  return (
    <Field
      name="sortBy"
      render={({ input }) => (
        <FormattedMessage id="filters.sort_by">
          {(placeholder) => (
            <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">
                {placeholder}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                autoWidth
                label={placeholder}
                {...input}>

                {SORT_OPTIONS.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    <FormattedMessage id={`filters.sort.${label}`}/>
                  </MenuItem>
                ))}
                
              </Select>
            </FormControl>
          )}
        </FormattedMessage>
      )}
    />
  );
};
