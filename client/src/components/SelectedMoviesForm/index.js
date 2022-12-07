import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";

const SelectedMoviesForm = () => (
  <Paper
    component="form"
    elevation={3}
    sx={{ p: 0.5, display: "flex", alignItems: "center" }}>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Share List name"
      inputProps={{ "aria-label": "Share List name" }}
    />
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <IconButton color="primary" sx={{ p: "10px" }} aria-label="button">
      <CheckIcon />
    </IconButton>
  </Paper>
);

export default SelectedMoviesForm;
