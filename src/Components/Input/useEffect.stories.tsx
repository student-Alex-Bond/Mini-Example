import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {cleanup} from "@testing-library/react";


interface UseEffectProps {
    value?: string,
    onChange?: (e: any) => void
}

export default {
    title: 'Components/UseEffect Stories',
} as Meta


export const UseEffects = () => {

    const [counter, setCounter] = useState(1)

    React.useEffect(() => {
        document.title = String(counter)
    })

    return <>
        Hello, {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>
}
export const SetTimeoutExample = () => {

    const [second, setSeconds] = useState(1)
    const [minutes, setMinutes] = useState(1)
    const [hour, setHour] = useState(1)

    React.useEffect(() => {
        const ID = setInterval(() => {
            setSeconds(new Date().getSeconds())
            setMinutes(new Date().getMinutes())
            setHour(new Date().getHours())
        }, 1000)

        return () => {
            clearInterval(ID)
        }
    }, [])


    return <>
        Hello, {hour}:{minutes}:{second}

    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = React.useState('')

    React.useEffect(() => {
        window.document.addEventListener('keypress', (e)=> {
            console.log(e.key)
            setText((state) => state + e.key)
        })

        return () => {
            window.document.removeEventListener('keypress',(e)=> {
                console.log(e.key)
                setText((state) => state + e.key)
            } )
        }
    }, [])

    return <>
        Hello, {text}

    </>
}

