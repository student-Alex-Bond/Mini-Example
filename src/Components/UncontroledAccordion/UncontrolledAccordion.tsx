import React, {useReducer} from "react";
import style from './UncontrolledAccordion.module.css'

export type AccordionUncontrolledType = {
    title: string
    collapsed?: boolean
}
export type ActionType ={
    type: string
}
export type StateType = {
    collapsed: boolean
}


export const reducer = (state:StateType , action: ActionType):StateType => {
    switch (action.type){
        case "TOGGLE-COLLAPSED":
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state
    }
}



function UncontrolledAccordion(props: AccordionUncontrolledType) {

  //  let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})


    const toggle = ()=>{
        dispatch({type: "TOGGLE-COLLAPSED"})
    }
    return (
        <div>
            <AccordionTitle title={props.title} toggle={toggle}/>
            {!state.collapsed && <AccordionBody/>}
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