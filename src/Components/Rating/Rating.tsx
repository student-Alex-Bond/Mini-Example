import React, {useState} from "react";

type ratingType = {
    value: number
}

function Rating(props: ratingType) {

    let [value, setValue] = useState(props.value)

    return (
        <div>
            <Star selected={value > 0}/><button onClick={()=> {setValue(1)}}>1</button>
            <Star selected={value > 1}/><button onClick={()=> {setValue(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={()=> {setValue(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={()=> {setValue(4)}}>4</button>
            <Star selected={value > 4}/><button onClick={()=> {setValue(5)}}>5</button>
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