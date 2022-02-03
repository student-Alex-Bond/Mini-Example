import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import UncontrolledAccordion from './UncontrolledAccordion'

export default {
    title: 'Components/UncontrolledAccordion Stories',
    component: UncontrolledAccordion
} as ComponentMeta<typeof UncontrolledAccordion>


const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => {
    let [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return <UncontrolledAccordion {...args}/>
}

export const UnCtrlAccord = Template.bind({})

UnCtrlAccord.args = {
    title: 'UncontrolledAccordion',
    collapsed: true
}