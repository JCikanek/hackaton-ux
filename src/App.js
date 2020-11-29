import logo from "./logo.svg";
import "./App.css";
import { Header } from "./App/components/Header/header";
import { DaysList } from "./App/components/DaysList/daysList";
import { Detail } from "./App/components/Detail/detail";

import { Day } from "./App/components/Day/day";
import { useEffect, useState } from "react";
import fakeData from "./jidla.json";
import { AddMeal } from "./App/components/AddMeal/addMeal";

const url = "jidla";
const readData = (url) => {
  return fetch(url).then((res) => res.json());
  /* .then((data) => {
      console.log(data); 
    });*/
};

const groupData = (data) =>
  data.reduce((acc, meal) => {
    if (acc?.has(meal.datum)) {
      acc.get(meal.datum).push(meal);
    } else {
      acc.set(meal.datum, [meal]);
    }
    return acc;
  }, new Map());

//readData(url);

function App() {
  const [state, setState] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState();

  const processData = (data) => setState(groupData(data));
  const handleFilterValues = ({ from, to }) => {
    const filterUrl = `${url}?datumOd=${from}&datumDo=${to}`;
    console.log(filterUrl);
    readData(filterUrl).then(processData);
  };
  /* useEffect(() => {
    readData(url).then(processData);
  }); */
  const displayMeal = (meal) => {
    setSelectedMeal(meal);
    console.log("app:", meal);
  };

  return (
    <div className="App">
      <Header onFilterChange={handleFilterValues} />
      <div className="main">
        <DaysList dataJidelnicek={state} onMealDetail={displayMeal} />

        {selectedMeal && <Detail mealInfo={selectedMeal} />}
      </div>
    </div>
  );
}

export default App;
