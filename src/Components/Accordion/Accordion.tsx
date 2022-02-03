import React from "react";


type ItemType ={
    title: string
    value: any
}


export type AccordionType = {
    title: string
    collapsed?: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value:any) => void
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )


}

type accordionTitleType = {
    title: string
    onChange: () => void

}

export function AccordionTitle(props: accordionTitleType) {
    return (
        <>
            <h3 onClick={props.onChange}>{props.title}</h3>
        </>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <>
            <ul>
                {props.items.map((item, index) => {
                    return <li onClick ={()=> {props.onClick(item.value)}} key={index}>{item.title}</li>
                })}
            </ul>
        </>
    )
}

