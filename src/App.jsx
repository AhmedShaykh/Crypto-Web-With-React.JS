import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          <p>
            Welcome To Blockchain World.<br />We Explore Metaverse With Web 3.0, Defi, NFT's & Smart Contract Connect In Cryptocurrencies.
          </p>
        </h4>
        <a
          className="App-link"
          href="https://opensea.io/collection/ahmedshaykh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>
            Check It My Collection's On OpenSea
          </b>
        </a>
      </header>
    </div>
  );
}

export default App;