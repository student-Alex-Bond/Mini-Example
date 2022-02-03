import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";


export default {
    title: 'Components/Accordion Stories',
    collapsed: true,
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>

export const MenuCollapsed = Template.bind({})
MenuCollapsed.storyName = 'Controlled Accordion'
MenuCollapsed.args = {
    title: 'Menu',
    collapsed: false,
    items: [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Viktor', value: 3},
        {title: 'Artem', value: 4}]
}


export const ModeChanging: ComponentStory<typeof Accordion> = () => {
    const [value, setValue] = useState<boolean>(false)


    return <Accordion title={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[{title: 'Dimych', value: 1},
                              {title: 'Valera', value: 2},
                              {title: 'Viktor', value: 3},
                              {title: 'Artem', value: 4}]}
                      onClick={(id)=> {alert(`user with ID ${id} should be happy`)}}/>
}


