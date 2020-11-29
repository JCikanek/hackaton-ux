import React, {useState} from 'react';
import { Input } from '../Inputy/Input';
import { Meal } from '../Meal/meal';
import './day.css';

export const Day = ({day, onMealDetail, onAddMeal}) => {
const [showInput, setShowInput] = useState(false);

const onDetail = meal => {
    console.log("day: ", meal);
    onMealDetail(meal);
}
/*const addMealHandler = ()=> {
  onAddMeal(day);
}*/





    const rectCmpMeal = day
    .sort(
        (a, b) =>
          parseInt(a.cas.match(/\d/g).join("")) -
          parseInt(b.cas.match(/\d/g).join(""))
      )
    .map(meal=> <Meal data={meal} onMealDetail={onDetail}/> )

    

    return(
<div className="day">



<h1>{day[0].datum}</h1> 
   
    {rectCmpMeal}

<div className="day__plus">
    
    { showInput===false && <button onClick={() => setShowInput(true) }> +  </button> }
   {showInput && <Input /> }
</div>

        
    
</div>
 
)

};