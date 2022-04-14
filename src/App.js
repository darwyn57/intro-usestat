import Exemple from './component/Exemple.js';
import React, { useState } from 'react'
import './App.css';
import LoginControl from './component/LoginControl.js';

function App() {
  //   const [toggleState, setToggleState] = useState(false);
  //   const toggleFonction = () => {
  //     console.log(toggleState);
  //     setToggleState(!toggleState);
  // }
  return (
    <div className="App">
      <LoginControl />
      {/* <header className="App-header">
        {toggleState ? <div onClick={toggleFonction} className="box">Clique moi</div> :
          <div onClick={toggleFonction} style={{ backgroundColor: "lightblue" }} className='box'>cliquer moi</div>
        }

        {toggleState && <p> Seulement pour les membres</p>}
        {
          (function () {
            if (toggleState) {
              return <button>Login</button>
            }
            else {
              return <button>Logout</button>
            }
          })()
        }
      </header> */}
    </div>
  );
}
export default App;
