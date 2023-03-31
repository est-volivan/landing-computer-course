
import React from 'react';
import './App.css';
import CounterComponent from './Components/CounterComponent/CounterComponent';
import LandingPage from './LandingPage/LandingPage'

export const Context = React.createContext(0);
function App() {
  return (
      <div className="App">
        <LandingPage />
        {/* <CounterComponent/> */}
      </div>
  );
}


export default App;
