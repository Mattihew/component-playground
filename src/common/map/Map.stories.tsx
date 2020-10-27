import React, {ComponentPropsWithoutRef} from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { MapComp } from "./Map";

export default {
  title: "common/Map",
  component: MapComp,
  decorators: [(Story) => <div style={{height: 500}}><Story /></div>],
  argTypes: {
    default3D: {
      control: {
        type: "boolean" 
      }
    }
  }
} as Meta;

type Props = ComponentPropsWithoutRef<typeof MapComp>;

const Template: Story<Props> = (args) => <MapComp {...args}/>;

export const Default = Template.bind({});
Default.args = {
  default3D: true
}