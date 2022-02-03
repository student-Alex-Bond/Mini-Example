import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rating from "./Rating";


export default {
    title: 'Components/Rating Stories',
    component: Rating
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args}/>

export const RatingMode = Template.bind({})
RatingMode.storyName = 'Rating'
RatingMode.args ={

}
