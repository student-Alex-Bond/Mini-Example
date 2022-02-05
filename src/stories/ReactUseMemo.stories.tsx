import React, {useMemo, useState} from 'react';
import {Meta, Story} from '@storybook/react';


interface PropsType {
    value?: string,
    onChange: (e: any) => void
}


export default {
    title: 'Components/ReactUseMemo Stories',
} as Meta


export const ReactUseMemo: Story<PropsType> = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

   resultA = useMemo(()=> {
       let tempResultA = 1
       for (let i = 1; i <= a; i++) {
           let fake =0
           while(fake < 10000000){
               fake++
               const fakeValue = Math.random()
           }
           tempResultA = tempResultA * i
       }
       return tempResultA
   }, [a])




    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>
    </>
}

export const ReactUseMemo1: Story<PropsType> = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=> {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake =0
            while(fake < 10000000){
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])




    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>
    </>
}
