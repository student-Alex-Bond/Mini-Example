import React, {ChangeEvent, useRef, useState} from 'react';
import {Meta, Story} from '@storybook/react';


interface UseEffectProps {
    value?: string,
    onChange?: (e: any) => void
}

export default {
    title: 'Components/UseEffect Stories',
} as Meta



export const UseEffects = () => {

    const [counter, setCounter] = useState(1)

    React.useEffect(()=>{
        document.title = String(counter)
    })

    return <>
        Hello, {counter}
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
    </>
}
export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)

    // React.useEffect(()=>{
    //     document.title = String(counter)
    // })

    setTimeout(()=>{
        document.title = counter.toString()
    }, 1000)

    return <>
        Hello, {counter}
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
    </>
}

