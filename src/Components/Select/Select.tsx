import React from 'react';

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    title: string
    currentValue: any
    onChange?: (value: any) => void
    items: ItemType[]
}

const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{props.title}</div>
            {props.items.map((item)=> <div>{item.title}</div>)}
        </div>
    );
};

export default Select;