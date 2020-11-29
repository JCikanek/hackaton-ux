import logo from "./logo.svg";
import "./App.css";
import { Header } from "./App/components/Header/header";
import { DaysList } from "./App/components/DaysList/daysList";
import { Detail } from "./App/components/Detail/detail";

import { Day } from "./App/components/Day/day";
import { useState } from "react";
import fakeData from "./jidla.json";





function App() {
  const [state,setState ] = useState(fakeData);

  const btnClick = ()=>{
    // console.log("Click");
    const newState = {...state}; 
    newState.cas = "13:00";
    setState(newState);
  }

  return (
    <div className="App">
      <button onClick={btnClick}>Set State</button>
      <Header />
      <DaysList  dataJidelnicek={state} />
    
      <Detail />
    </div>
  );
}

export default App;
