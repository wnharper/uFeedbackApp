import { useState } from "react"
import RadioButton from "./RadioButton"

const RatingSelect = ({selectRating, selected}) => {


  return (
    <ul className="rating">
        
        <RadioButton id={1} selectRating={selectRating} selected={selected} />
        <RadioButton id={2} selectRating={selectRating} selected={selected} />
        <RadioButton id={3} selectRating={selectRating} selected={selected} />
        <RadioButton id={4} selectRating={selectRating} selected={selected} />
        <RadioButton id={5} selectRating={selectRating} selected={selected} />
   
    </ul>
  )
}
export default RatingSelect