import React from 'react';
import MLBLogo from '../assets/images/MLB.png';
import Logo from '../assets/images/LDBLogo.png';
import '../components/Logos.css';
import './Pages.css';

class Mlb extends React.Component {
    render()
    {
        return(
            <body className = "Pages">
                <h1>Placeholder</h1>
                <img src={Logo} className="App-logo-pages" alt="logo" />
                <img src={MLBLogo} className = "Logos" alt="MLB" />

               </body>
        );
    }
}

export default Mlb;
