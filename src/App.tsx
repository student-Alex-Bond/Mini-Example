import React from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontroledAccordion/UncontrolledAccordion";


function App() {
    return (
        <div>
            <PageTitle title = {"Title 1"}/>
            <PageTitle title = {"Title 2"} />
            Article 1
            <Rating value={3}/>
            <Accordion title={"---Menu---"} collapsed = {true}/>
            Article 2
            <Accordion title={"---Users---"} collapsed = {false}/>
            <Rating value={2}/>
            <OnOff />
            <UncontrolledAccordion title={'---Uncontrolled Accordion---'} />
        </div>
    );
}
type PageTitleType ={
    title: string
}
function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}

export default App;
