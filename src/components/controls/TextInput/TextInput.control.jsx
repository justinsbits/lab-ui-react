import React from "react";
import { TextField } from "@material-ui/core";

export function TextInputControl(props) {
  let { label, value, onChange, error, helperText, ...other } = props;

  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      {...other}
    />
  );
}
