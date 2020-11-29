import React from 'react';


export const Meal = ({data:{cas:time, nazev:name}}) => {


    return(

    <div className="oneMeal">
         <p className="oneMeal__time">{time}</p>
        <p className="oneMeal__dish">{name}</p>
    </div>
    
    

 
)
}