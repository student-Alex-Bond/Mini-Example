import React, {useState} from "react";
import style from './UncontrolledAccordion.module.css'

type AccordionType = {
    title: string
    collapsed?: boolean
}

function UncontroledAccordion(props: AccordionType) {

    let [collapsed, setCollapsed] = useState(false)

    const toggle = ()=>{
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.title} toggle={toggle}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )


}

type accordionTitleType = {
    title: string
    toggle: () => void
}

function AccordionTitle(props: accordionTitleType) {
    return (
            <h3 className={style.h3} onClick={props.toggle}>{props.title}</h3>
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

export default UncontroledAccordion;