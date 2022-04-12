import Exemple from './Exemple.js';
import React, { useState } from 'react'
import './App.css';


function App() {
  const [toggleState, setToggleState] = useState(false);
  const toggleFonction = () => {
    console.log(toggleState);
    setToggleState(!toggleState);
  }
  if (toggleState) {

    return (
      <div className="App">
        <header className="App-header">
          <div onClick={toggleFonction} className="box">cliquer moi</div>
        </header>
      </div>

    );
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <div onClick={toggleFonction} style={{ backgroundColor: "lightGreen" }} className='box'>cliquer moi</div>

        </header>
      </div>
    );
  }
}
export default App;
