import React from "react";
type AccordionType ={
    title: string
    collapsed?: boolean
    onChange: ()=> void
}

function Accordion(props: AccordionType) {
       return (
       <div>
           <AccordionTitle title = {props.title} onChange={props.onChange}/>
           { !props.collapsed && <AccordionBody/>}
       </div>
   )


}
type accordionTitleType ={
    title: string
    onChange: ()=> void
}

function AccordionTitle(props: accordionTitleType) {
    return (
        <>
            <h3 onClick={props.onChange}>{props.title}</h3>
        </>
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

export default Accordion;