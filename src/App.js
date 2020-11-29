import logo from './logo.svg';
import './App.css';
import { Header } from './App/components/Header/header';
import { DaysList } from './App/components/DaysList/daysList';

function App() {
  return (
    <div className="App"> 
     <Header />
     <DaysList />
    </div>
  );
}

export default App;
