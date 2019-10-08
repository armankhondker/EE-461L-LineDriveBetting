import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import About from './About';
import Nba from './Nba'; 
import Nba from './Nfl'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LineDriveBetting BOYYYYS <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <About></About> 
      <Nba></Nba>
      <Nfl></Nfl>
    </div>
  );
}

export default App;
