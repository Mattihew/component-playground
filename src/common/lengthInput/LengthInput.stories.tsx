import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { LengthInput } from "./LengthInput";

export default {
  title: "common/LengthInput",
  component: LengthInput,
} as Meta;

export const Primary = () => (
  <LengthInput defaultFormat={"m"} outputFormat={"f"} />
);
