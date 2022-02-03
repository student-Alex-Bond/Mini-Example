import React, {useRef, useState} from 'react';
import {Meta, Story} from '@storybook/react';


interface InputProps {
    value?: string,
    onChange: (e: any) => void
}

export default {
    title: 'Components/Input Stories',
} as Meta

const Template: Story<InputProps> = (args) => {
    const [value, setValue] = useState('')
    return <><input {...args} />  </>
}

export const UncontrolledInput = Template.bind({})
UncontrolledInput.args = {}


export const TrackValueOfUncontrolledInput: Story<InputProps> = (args) => {
    const [value, setValue] = useState('')

    return <><input {...args} onChange={(event) => {setValue(event.currentTarget.value)}} /> - {value} </>
}
TrackValueOfUncontrolledInput.args = {}


export const GetValueOfUncontrolledInputByButtonPress: Story<InputProps> = (args) => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)
// если нужен доступ напрямую можно использовать хук useRef  в инпут должен быть параметр ref = {}
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input {...args} ref={inputRef} />
        <button onClick={save}>Save</button>
        actual value - {value} </>
}
TrackValueOfUncontrolledInput.args = {}


export const ControlledInputWithFixedValue = Template.bind({})
ControlledInputWithFixedValue.args = {
    value: 'I\'m fine'
}
