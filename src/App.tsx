import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontroledAccordion/UncontrolledAccordion";

import UncontrolledRating from "./Components/UncontrolRating/UncontroledRating";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    return (
        <div className={'App'}>
            <PageTitle title = {"Title 1"}/>
            <PageTitle title = {"Title 2"} />
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue} />
            <Accordion title={"---Menu---"} collapsed = {true}/>
            Article 2
            <Accordion title={"---Users---"} collapsed = {false}/>

            <OnOff />
            <UncontrolledAccordion title={'---Uncontrolled Accordion---'} />
            <UncontrolledRating />
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
