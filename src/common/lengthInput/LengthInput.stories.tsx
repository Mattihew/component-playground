import React, { ComponentPropsWithoutRef } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { LengthInput } from "./LengthInput";

export default {
  title: "common/LengthInput",
  component: LengthInput,
} as Meta;

type StoryType = Story<ComponentPropsWithoutRef<typeof LengthInput>>;

export const Default: StoryType = (args) => <LengthInput {...args} />;

export const WithStartValue: StoryType = (args) => <LengthInput {...args} />;
WithStartValue.args = { defaultValue: 1000, defaultFormat: "m" };
