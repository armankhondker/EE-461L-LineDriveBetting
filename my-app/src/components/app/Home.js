import React from 'react';
import logo from '../../assets/logo.svg';
import Logo from '../../assets/images/Logo.png';

class Home extends React.Component {  
    render()
    {
        return(
            <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
           LineDriveBetting.com
        </p>
        <a
          className="App-link"
          href="About"
        >
          About
        </a>

        <a
          className="App-link"
          href="Nba"
        >
          NBA
        </a>

        <a
          className="App-link"
          href="Nfl"
        >
          NFL
        </a>

        <a
          className="App-link"
          href="Mlb"
        >
          MLB
        </a>
      </header>
    </div>
    );
    }

}

export default Home; 