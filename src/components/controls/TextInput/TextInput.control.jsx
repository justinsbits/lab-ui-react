import React from "react";
import TextField from "@mui/material/TextField";

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
