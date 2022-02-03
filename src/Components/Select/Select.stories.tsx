import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Select from "./Select";


export default {
    title: 'Components/Select Stories',

    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>

export const CustomSelect = Template.bind({})

CustomSelect.args = {
    title: 'Users',

    items: [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Viktor', value: 3},
        {title: 'Artem', value: 4}]
}


export const GreatSelect: ComponentStory<typeof Select> = () => {
    const [value, setValue] = useState<boolean>(false)


    return <Select title={'Users'}
                      currentValue={"2"}
                      items={[{title: 'Dimych', value: 1},
                          {title: 'Valera', value: 2},
                          {title: 'Viktor', value: 3},
                          {title: 'Artem', value: 4}]}
                      />
}


