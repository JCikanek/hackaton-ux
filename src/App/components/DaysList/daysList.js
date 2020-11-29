import React from 'react';
import { Day } from '../Day/day';



export const DaysList = ({dataJidelnicek}) => {
console.log(dataJidelnicek);
const dny = ["Pondělí", "Úterý", "Středa" ]
const rectCmpDen = dny.map(den=> <Day key={den} dayName={den} time={dataJidelnicek.cas} meal ={dataJidelnicek.nazev} />);

return(
<div>

     <h1>DayList</h1> 
    {rectCmpDen}

     
</div>)
}
;