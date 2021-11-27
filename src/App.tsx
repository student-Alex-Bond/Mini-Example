import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import UncontrolledAccordion from "./Components/UncontroledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontrolRating/UncontroledRating";
import ControlledOnOff from "./Components/ControlledOnOff/ControlledOnOff";
import UnCtrlOnOff from "./Components/UnCtrlOnOff/UnCtrlOnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [on, setOn] = useState<boolean>(false)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)


    return (
        <div className={'App'}>
            {/*<PageTitle title={"Title 1"}/>*/}
            {/*<PageTitle title={"Title 2"}/>*/}

            {/*<Accordion title={"---Menu---"} collapsed={true}/>"*/}
            {/*<UnCtrlOnOff/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={"---Users---"} collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

            <UncontrolledAccordion title={'---Uncontrolled Accordion---'}/>
            <UncontrolledRating/>
            <ControlledOnOff onChange={ setOn} on={on}/>  {on.toString()}
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}

export default App;
