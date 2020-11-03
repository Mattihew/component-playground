import React, { ComponentPropsWithoutRef } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { AreaInput } from "./AreaInput";

export default {
  title: "common/AreaInput",
  component: AreaInput,
} as Meta;

type StoryType = Story<ComponentPropsWithoutRef<typeof AreaInput>>;

export const Default: StoryType = (args) => <AreaInput {...args} />;

export const WithStartValue: StoryType = (args) => <AreaInput {...args} />;
WithStartValue.args = { defaultValue: 1000, defaultFormat: "sqM" };
