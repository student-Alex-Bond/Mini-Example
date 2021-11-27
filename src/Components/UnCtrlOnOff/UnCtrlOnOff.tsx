import React, {useState} from 'react';

 export type OnOffType ={
    on?: boolean

}

const UnCtrlOnOff = (props: OnOffType) => {

    let [on, setOn] = useState(false)

    const onStyle ={
        width: '100px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: on? 'green' : 'white',

    }
    const offStyle ={
        width: '100px',
        height: '50px',
        backgroundColor: !on? 'red': 'white',
        border: '1px solid black',
        marginLeft: '5px'
    }
    const indicatorStyle ={
        width: '50px',
        height: '50px',
        borderRadius: '25px',
        border:"1px solid black",
        marginLeft: '5px',
        backgroundColor: on? 'green': 'red',
    }
    const general ={
        display: 'flex'
    }


    return (
        <div style = {general}>
            <div style ={onStyle} onClick={() => {setOn(true)}} >on</div>
            <div style = {offStyle} onClick={() => {setOn(false)}}>off</div>
            <div style = {indicatorStyle}></div>
        </div>
    );
};

export default UnCtrlOnOff;