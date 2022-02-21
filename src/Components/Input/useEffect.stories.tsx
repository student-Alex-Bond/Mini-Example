import React, { useState} from 'react';
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

    const [second, setSeconds] = useState(1)
    const [minutes, setMinutes] = useState(1)
    const [hour, setHour] = useState(1)

    React.useEffect(()=>{
    setInterval(()=>{
        setSeconds(new Date().getSeconds())
        setMinutes(new Date().getMinutes())
        setHour(new Date().getHours())
    }, 1000)
    }, [])

    return <>
        Hello, {hour}:{minutes}:{second}

    </>
}

