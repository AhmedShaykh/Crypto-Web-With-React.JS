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
            Welcome To Blockchain World.<br />We Create Metaverse , Web 3.0 , De-Fi , NFT's , Cryptocurrencies , Smart Contract's , DAO & DApps .
          </p>
        </h4>
        <a
          className="App-link"
          href="https://coinmarketcap.com/watchlist/61fd7d5da00b565b2f310e96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>
            Check It My Watchlist In CoinMarketCap 🚀
          </b>
        </a>
      </header>
    </div>
  );
}

export default App;