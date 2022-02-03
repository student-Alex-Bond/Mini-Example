import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import UnCtrlOnOff from "./UnCtrlOnOff";

export default {
    title: 'Components/UnCtrlOnOff Stories',
    component: UnCtrlOnOff
} as ComponentMeta<typeof UnCtrlOnOff>

const Template: ComponentStory<typeof UnCtrlOnOff> = (args) => {
    let [on, setOn] = useState(false)

    return <UnCtrlOnOff/>
}

export  const UnCtrlOnOffF = Template.bind({})
UnCtrlOnOffF.args = {
    title: 'UnCtrlOnOff'
}