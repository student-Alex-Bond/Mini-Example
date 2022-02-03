import React from 'react';

type OnOffType ={
    on: boolean
    onChange: (on: boolean)=> void
    onClick? : () => void

}

const ControlledOnOff = (props: OnOffType) => {



    const onStyle ={
        width: '100px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: props.on? 'green' : 'white',

    }
    const offStyle ={
        width: '100px',
        height: '50px',
        backgroundColor: props.on? 'white': 'red',
        border: '1px solid black',
        marginLeft: '5px'
    }
    const indicatorStyle ={
        width: '50px',
        height: '50px',
        borderRadius: '25px',
        border:"1px solid black",
        marginLeft: '5px',
        backgroundColor: props.on? 'green': 'red',
    }
    const general ={
        display: 'flex'
    }

    const view = () => {
        props.onChange(true)
    }
    const noView = () => {
        props.onChange(false)
    }


    return (
        <div style = {general}>
            <div style ={onStyle} onClick={view} >on</div>
            <div style = {offStyle} onClick={noView}>off</div>
            <div style = {indicatorStyle}></div>
        </div>
    );
};

export default ControlledOnOff;