import React, { ComponentPropsWithoutRef } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Clock } from "./Clock";

export default {
    title: "common/Clock",
    component: Clock,
  } as Meta;

  
type StoryType = Story<ComponentPropsWithoutRef<typeof Clock>>;


export const Default: StoryType = (args) => <Clock {...args} />;

export const WithOffset: StoryType = (args) => <Clock {...args} />;
WithOffset.args = {offset: 3600000};