import * as React from "react";
import {
	Paper,
	InputBase,
	Divider,
	IconButton,
	Typography
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Form, Field } from "react-final-form";

const SelectedMoviesForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
	validate={values => {
		const errors = {}
		if(!values.listName){
			errors.listName = 'Required'
		}
		return errors;
	}}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={3}
          sx={{ p: 0.5, display: "flex", alignItems: "center" }}
        >
          <Field
            name="listName"
            render={({ input, meta }) => (
			<>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Share List name"
					inputProps={{ "aria-label": "Share List name" }}
					{...input}
              	/>
				{meta.error && meta.touched && <Typography color="error">{meta.error}</Typography>}
			</>

            )}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <IconButton
		  	type="submit"
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <CheckIcon />
          </IconButton>
        </Paper>
      </form>
    )}
  />
);

export default SelectedMoviesForm;
