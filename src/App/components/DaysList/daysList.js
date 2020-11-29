import React from 'react';
import { Day } from '../Day/day';



export const DaysList = ({dataJidelnicek}) => {
console.log(dataJidelnicek);



const rectCmpDen = dataJidelnicek.map(den=> <Day key={den} day={} />);

return(
<div>

     <h1>DayList</h1> 
    {rectCmpDen}

     
</div>)
}
;