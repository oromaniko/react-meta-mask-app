import React, { useState } from 'react';
import './App.css';
import MetaMaskAuth from "./components/MetaMaskAuth";


function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
      <div className='container'>
          {!showAuth ? (
              <button className='button' onClick={() => setShowAuth(true)}>
                <h2>Get public key</h2>
              </button>
          ) : <MetaMaskAuth />
          }
      </div>
      )
}

export default App;
