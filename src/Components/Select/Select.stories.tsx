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
    currentValue: 0,
    items: [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Viktor', value: 3},
        {title: 'Artem', value: 4}]
}


export const GreatSelect: ComponentStory<typeof Select> = (args) => {

    const [collapsed, setCollapsed] = React.useState<boolean>(true)

    const [title, setTitle] = useState<string>('Users')


    const openClosedMenu = (flag: boolean) => {
        setCollapsed(flag)
    }

    const onChangeCallback = (userID: string) => {
        let newTitle = args.items.find((item) => item.value === userID)
        if (newTitle) {
            setTitle(newTitle.title)
            setCollapsed(true)
        }
    }


    return <Select title={title}
                   onChange={onChangeCallback}
                   openClosedMenu={openClosedMenu}
                   collapsed={collapsed}
                   items={args.items}/>
}
GreatSelect.args = {
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Valera', value: '2'},
        {title: 'Viktor', value: '3'},
        {title: 'Artem', value: '4'}]
}

