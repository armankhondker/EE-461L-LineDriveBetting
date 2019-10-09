import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Nba from './components/Nba';
import Nfl from './components/Nfl';
import Mlb from './components/Mlb';
import Home from './components/Home'; 


function App() {
  return (

    <BrowserRouter>
    <Route exact={true} path='/' render={() => (
                     <Home />
          )}/>
    <Route exact={true} path='/About' render={() => (
                     <About />
          )}/>
    <Route exact={true} path='/Nba' render={() => (
                     <Nba />
          )}/>
    <Route exact={true} path='/Nfl' render={() => (
                     < Nfl/>
          )}/>
    <Route exact={true} path='/Mlb' render={() => (
                     < Mlb/>
          )}/>
     </BrowserRouter>
  );
}

export default App;
