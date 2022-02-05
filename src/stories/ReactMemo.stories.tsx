import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';


interface PropsType {
    value?: string,
    onChange: (e: any) => void
}


export default {
    title: 'Components/ReactMemo Stories',
} as Meta


const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {

    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}


const Users = React.memo(UsersSecret)

export const ReactMemo: Story<PropsType> = () => {

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Dimych", "Valera", "Artem"])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add User</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
