import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import About from './About';
import Nba from './Nba'; 
import Nfl from './Nfl'; 
import Mlb from './Mlb'; 
import Home from './Home'; 


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
