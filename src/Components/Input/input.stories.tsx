import React, {ChangeEvent, useRef, useState} from 'react';
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

    return <><input {...args} onChange={(event) => {
        setValue(event.currentTarget.value)
    }}/> - {value} </>
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

    return <><input {...args} ref={inputRef}/>
        <button onClick={save}>Save</button>
        actual value - {value} </>
}
TrackValueOfUncontrolledInput.args = {}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')
    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <input value={parentValue} onChange={changeValue}/>

}

export const ControlledCheckBox = () => {
    const [isChecked, setIsChecked] = useState<boolean>(true)
    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.currentTarget.checked)
    }

    return <input  type={"checkbox"} checked={isChecked}  onChange={changeValue}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string| undefined>("2")
    const changeValue = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <select value={parentValue} onChange={changeValue}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Moscow</option>
    </select>

}


export const ControlledInputWithFixedValue = Template.bind({})
ControlledInputWithFixedValue.args = {
    value: 'I\'m fine'
}
