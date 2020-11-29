import React from "react";

const jidla = ["svíčková", "guláš"]

export const Input = () => {
  return (
    <div className="newMeal">
        <div className="newMeal__time">
          <input type="time" name="nazev" id="nazev" required />
            
  <select>{jidla.map(jidlo=><option>{jidlo}</option>)}</select>
        </div>
   
      <button>Přidat</button>
    </div>
  );
};
