import React, {useState} from "react";


function UncontrolledRating() {

    let [value, setValue] = useState(0)

    const updateStar = (value: number) => {
      setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0} updateStar={updateStar} value={1}/>
            <Star selected={value > 1} updateStar={updateStar} value={2}/>
            <Star selected={value > 2} updateStar={updateStar} value={3}/>
            <Star selected={value > 3} updateStar={updateStar} value={4}/>
            <Star selected={value > 4} updateStar={updateStar} value={5}/>
        </div>
    )
}

type starType = {
    selected: boolean
    updateStar: (value: number)=> void
    value: 1|2|3|4|5
}

function Star(props: starType) {

    return <span onClick={()=>{props.updateStar(props.value)}}>{props.selected ? <b>star </b> : 'star ' }</span>

}
export default UncontrolledRating;