import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import SelectByDimych from "./SelectByDimych";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Components/SelectByDimych Stories',
    component: SelectByDimych,
} as ComponentMeta<typeof SelectByDimych>;

const Template: ComponentStory<typeof SelectByDimych> = (args) => <SelectByDimych {...args}/>


export const GreatSelect: ComponentStory<typeof SelectByDimych> = (args) => {

    const [value, setValue] = React.useState('1')


    return <SelectByDimych onChange={setValue} value={value} items={args.items}/>
}
GreatSelect.args = {
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Viktor', value: '3'},
        {title: 'Artem', value: '4'}]
}



