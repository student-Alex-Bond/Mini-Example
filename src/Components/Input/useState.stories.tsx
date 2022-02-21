import React, {ChangeEvent, useRef, useState} from 'react';
import {Meta, Story} from '@storybook/react';


interface UseStateProps {
    value?: string,
    onChange: (e: any) => void
}

export default {
    title: 'Components/UseState Stories',
} as Meta



export const UncontrolledInput = () => {

    const [counter, setCounter] = useState(0)
    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        {counter}
    </>
}

