import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { MapComp } from "./Map";

export default {
  title: "common/Map",
  component: MapComp,
} as Meta;

export const Default = () => <div style={{height: 500}}><MapComp/></div>;