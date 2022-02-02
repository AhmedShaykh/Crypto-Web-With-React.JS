import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Welcome To Blockchain World.<br />We Explore Metaverse With Web 3.0 , De-Fi & NFT's Connect In Cryptocurrencies.
        </h3>
        <a
          className="App-link"
          href="https://coinmarketcap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>
            We Love Bitcoin
          </b>
        </a>
      </header>
    </div>
  );
}

export default App;