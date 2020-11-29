import React from 'react';
import './day.css';

export const Day = ({time, dayName, meal}) => {


    return(
<div className="day">



<h1>{dayName}</h1> 
     <div className="day__oneMeal">
         <p className="day__time">{time}</p>
<p className="day__dish">{meal}</p>
     </div>
    

<div className="day__plus">
    
    <p>+</p>
</div>
    
</div>
 
)

};