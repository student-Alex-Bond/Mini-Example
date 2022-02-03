import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import UncontrolledRating from "./UncontroledRating";

export default {
    title: 'Components/UncontrolledRating Stories',
    component: UncontrolledRating
} as ComponentMeta<typeof UncontrolledRating>


const Template: ComponentStory<typeof UncontrolledRating> = (args) => {
    let [value, setValue] = useState(0)

    return <UncontrolledRating  />
}

export const UnCtrlRating = Template.bind({})

UnCtrlRating.args = {}