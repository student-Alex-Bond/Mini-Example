import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import UncontrolledAccordion from './UncontrolledAccordion'

export default {
    title: 'Components/UncontrolledAccordion Stories',
    component: UncontrolledAccordion
} as ComponentMeta<typeof UncontrolledAccordion>


const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => {

    return <UncontrolledAccordion {...args}/>
}

export const UnCtrlAccord = Template.bind({})

UnCtrlAccord.args = {
    title: 'Users',
    collapsed: true
}