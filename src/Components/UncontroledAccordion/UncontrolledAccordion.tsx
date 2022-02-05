import React, {useReducer, useState} from "react";
import style from './UncontrolledAccordion.module.css'

export type AccordionUncontrolledType = {
    title: string
    collapsed?: boolean
}
type ActionType ={
    type: string
}


const reducer = (state: boolean, action: ActionType) => {
    if(action.type === "TOGGLE-COLLAPSED"){
        return !state
    }

    return state
}



function UncontrolledAccordion(props: AccordionUncontrolledType) {

  //  let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)


    const toggle = ()=>{
        dispatch({type: "TOGGLE-COLLAPSED"})
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

export default UncontrolledAccordion;