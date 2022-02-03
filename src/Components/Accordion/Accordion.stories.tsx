import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
 import {Accordion} from "./Accordion";

export default {
    title: 'Components/Accordion Stories',
    collapsed: true,
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>

export const MenuCollapsed = Template.bind({})
MenuCollapsed.storyName = 'Controlled Accordion'
MenuCollapsed.args ={
    title: 'Menu',
    collapsed: true
}
