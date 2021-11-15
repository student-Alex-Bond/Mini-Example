import React from "react";
type AccordionType ={
    title: string
    collapsed?: boolean
}

function Accordion(props: AccordionType) {
       return (
       <div>
           <AccordionTitle title = {props.title}/>
           { !props.collapsed && <AccordionBody/>}
       </div>
   )


}
type accordionTitleType ={
    title: string
}

function AccordionTitle(props: accordionTitleType) {
    return (
        <>
            <h3>{props.title}</h3>
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