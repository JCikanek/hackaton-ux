import React from 'react';
import { Meal } from '../Meal/meal';
import './day.css';

export const Day = ({day, onMealDetail}) => {

const onDetail = meal => {
    console.log("day: ", meal);
    onMealDetail(meal);
}

    const rectCmpMeal = day.map(meal=> <Meal data={meal} onMealDetail={onDetail}/> )

    

    return(
<div className="day">



<h1>{day[0].datum}</h1> 
   
    {rectCmpMeal}

<div className="day__plus">
    
    <p>+</p>
</div>
    
</div>
 
)

};