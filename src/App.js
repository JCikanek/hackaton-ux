
import "./App.css";
import { Header } from "./App/components/Header/header";
import { DaysList } from "./App/components/DaysList/daysList";
import { Detail } from "./App/components/Detail/detail";

import { useState } from "react";
import fakeData from './jidla.json'

const url = "jidla";
const readData = (url) => {
  return fetch(url).then((res) => res.json());
  /* .then((data) => {
      console.log(data); 
    });*/
};
function fakeDataMap(data) {
  return data.reduce((acc, meal) => {
    if (acc?.has(meal.datum)) {
      acc.get(meal.datum).push(meal);
    } else {
      acc.set(meal.datum, [meal]);
    }
    return acc;
  }, new Map());
}

//readData(url);

function App() {
  const [state, setState] = useState(fakeData);
  const [selectedMeal, setSelectedMeal] = useState();

  const processData = (data) => setState(data);
  const handleFilterValues = ({ from, to }) => {
    const filterUrl = `${url}?datumOd=${from}&datumDo=${to}`;
    console.log(filterUrl);
    readData(filterUrl).then(processData);
  };
  const addDatatoFake = (zaznam) =>{
    setState([...state, zaznam])
  }

  const displayMeal = (meal) => {
    setSelectedMeal(meal);
    console.log("app:", meal);
  };

  return (
    <div className="App">
      <Header onFilterChange={handleFilterValues} />
      <div className="main">
        <DaysList dataJidelnicek={fakeDataMap(state)} onMealDetail={displayMeal} onAddData ={addDatatoFake}/>

        {selectedMeal && <Detail mealInfo={selectedMeal} />}
      </div>
    </div>
  );
}

export default App;
