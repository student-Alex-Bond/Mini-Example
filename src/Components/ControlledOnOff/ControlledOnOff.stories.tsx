import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ControlledOnOff from "./ControlledOnOff";



export default {
    title: 'Components/ControlledOnOff Stories',
    component: ControlledOnOff,

} as ComponentMeta<typeof ControlledOnOff>;

const Template: ComponentStory<typeof ControlledOnOff> = (args) => <ControlledOnOff {...args}/>

export const ControlledOnOffTrue = Template.bind({})
ControlledOnOffTrue.storyName = 'ControlledOnOffTrue'
ControlledOnOffTrue.args ={
    on: true
}
