import logo from "./logo.svg";
import "./App.css";
import { Header } from "./App/components/Header/header";
import { DaysList } from "./App/components/DaysList/daysList";
import { Detail } from "./App/components/Detail/detail";

import { Day } from "./App/components/Day/day";

function App() {
  return (
    <div className="App">
      <Header />
      <DaysList />
      <Day />
      <Detail />
    </div>
  );
}

export default App;
