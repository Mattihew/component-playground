import React from "react";
import { UnitInput } from "../unitInput/UnitInput";

const lengths = {
  m: 2,
  f: 1,
};

type LengthInputProps = {
  outputFormat: keyof typeof lengths;
  defaultFormat: keyof typeof lengths;
};

export const LengthInput = ({outputFormat, defaultFormat}: LengthInputProps) => {
  return <UnitInput units={lengths} outputFormat={outputFormat} defaultFormat={defaultFormat}/>;
};
