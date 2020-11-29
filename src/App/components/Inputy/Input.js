import React from "react";

const jidla = ["svíčková", "guláš"]

export const Input = ({onAddData, date}) => {
  return (
    <div className="newMeal">
        <div className="newMeal__time">
          <input type="time" name="nazev" id="time" required />
            
  <select>{jidla.map(jidlo=><option id="meal">{jidlo}</option>)}</select>
        </div>
   
      <button onClick={()=>{
          // nacist cas a nazev
          const time = document.querySelector("#time").value;
          const meal = document.querySelector("#meal").value;

          console.log(typeof time)
          onAddData({datum:date, cas:time, nazev:meal})
      }}>Přidat</button>
    </div>
  );
};
