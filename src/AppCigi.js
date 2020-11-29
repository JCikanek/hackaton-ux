import logo from "./logo.svg";
import "./App.css";
import { Header } from "./App/components/Header/header";
import { DaysList } from "./App/components/DaysList/daysList";
import { Detail } from "./App/components/Detail/detail";

import { Day } from "./App/components/Day/day";
import { useState } from "react";

const fakeData ={
  "id": 1,
  "cas": "12:00",
  "datum": "29.11.2020",
  "nazev": "Řízek s brambory",
  "ingredience": [
    {
      "nazev": "vepřové maso",
      "jednotka": "g",
      "mnozstvi": 200
    },
    {
      "nazev": "strouhanka",
      "jednotka": "g",
      "mnozstvi": 20
    },
    {
      "nazev": "vejce",
      "jednotka": "ks",
      "mnozstvi": 1
    },
    {
      "nazev": "hladká mouka",
      "jednotka": "g",
      "mnozstvi": 20
    },
    {
      "nazev": "sůl",
      "jednotka": "g",
      "mnozstvi": 2
    },
    {
      "nazev": "brambory",
      "jednotka": "g",
      "mnozstvi": 200
    },
    {
      "nazev": "máslo",
      "jednotka": "g",
      "mnozstvi": 20
    }
  ]
}


function AppCigi() {
  const [state,setState ] = useState(fakeData);

  const btnClick = ()=>{
    // console.log("Click");
    const newState = {...state}; 
    newState.cas = "13:00";
    setState(newState);
  }

  const pole= ["Po","Ut", "St"];

  const rectCmpDen = ()=> pole.map(den=> <Day arg={den} />);

  return (
    <div className="App">
      {rectCmpDen()}

      {/* <button onClick={btnClick}>Set State</button> */}
      {/* <Header />
      <DaysList />
     
      <Detail /> */}
    </div>
  );
}

export default App;
