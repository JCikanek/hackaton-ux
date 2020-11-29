import React from 'react';
import "./addMeals.css"


export const AddMeal = ()=> {


    return(
        <div className="addMeals">

            <div className="addMeals-overlay">


           
            <a>Přidej jídlo</a>
            <div class="new-meal">
                    <div class="field">
                      <label for="nazev"> Názav jídla</label> <br />
                      <input type="text" name="nazev" id="nazev" required />
                    </div>

                    <div class="field">
                      <label for="ingredience">Ingredience</label> < br />
                      <div className="oneIn"><input type="number" name="mnozstvi" id="mnozstvi" />
                      <input type="text" name="ingredience" id="ingredience" /> <br /> 
                      </div>
                      <div className="oneIn"><input type="number" name="mnozstvi" id="mnozstvi" />
                      <input type="text" name="ingredience" id="ingredience" /> <br /> 
                      </div>
                      <div className="oneIn"><input type="number" name="mnozstvi" id="mnozstvi" />
                      <input type="text" name="ingredience" id="ingredience" /> <br /> 
                      </div>
                    </div>
                
                
                  </div>
            </div>
        </div>
    )
}