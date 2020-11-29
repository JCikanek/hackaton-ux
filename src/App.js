import logo from "./logo.svg";
import "./App.css";
import { Header } from "./App/components/Header/header";
import { DaysList } from "./App/components/DaysList/daysList";
import { Detail } from "./App/components/Detail/detail";

import { Day } from "./App/components/Day/day";
import { useState } from "react";
import fakeData from "./jidla.json";

const fakeDataMap = fakeData.reduce((acc, meal) => {
  if (acc?.has(meal.datum)) {
    acc.get(meal.datum).push(meal);
  } else {
    acc.set(meal.datum, [meal]);
  }
  return acc;
}, new Map());
console.log(fakeDataMap);

function App() {
  const [state, setState] = useState(fakeDataMap);
  const [selectedMeal, setSelectedMeal] = useState();



  const displayMeal = meal => {
    
    setSelectedMeal(meal);
    console.log("app:", meal)
 
  };

  return (
    <div className="App">
     
      <Header />
      <DaysList dataJidelnicek={state} onMealDetail={displayMeal}/>

    {selectedMeal && <Detail mealInfo={selectedMeal}/>}
    </div>
  );
}

export default App;
