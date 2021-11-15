import React from "react";

type ratingType = {
    value: number
}

function Rating(props: ratingType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/> 
        </div>
    )
}

type starType = {
    selected: boolean
}

function Star(props: starType) {
    return props.selected ? <span><b>star </b></span> : <span>star </span>

}

export default Rating;