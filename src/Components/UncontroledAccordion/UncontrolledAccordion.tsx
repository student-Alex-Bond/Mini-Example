import React, {useState} from "react";

type AccordionType = {
    title: string
    collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionType) {

    let [collapsed, setToggle] = useState(false)

    const toggle = (collapsed: boolean) => {
       return !collapsed
    }
    return (
        <div>
            <AccordionTitle title={props.title}/> <button onClick={() => {setToggle(toggle(collapsed))}}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )


}

type accordionTitleType = {
    title: string
}

function AccordionTitle(props: accordionTitleType) {
    return (
            <h3>{props.title}</h3>
    )
}


function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

export default UncontrolledAccordion;