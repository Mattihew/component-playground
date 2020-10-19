import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";

type UnitInputProps = {
  units: Record<string, number>;
  outputFormat: string;
  defaultFormat: string;
};

export const UnitInput = ({ units, defaultFormat }: UnitInputProps) => {
  return (
    <TextField
      variant="filled"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{defaultFormat}</InputAdornment>
        ),
      }}
    />
  );
};
