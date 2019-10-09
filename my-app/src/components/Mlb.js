import React from 'react';
import MLBLogo from '../assets/images/MLB.png';
import Logo from '../assets/images/LDBLogo.png';
import './Logos.css';
import './Pages.css';

class Mlb extends React.Component {
    render()
    {
        return(
            <body className = "Pages">

                 <img src={Logo} className="App-logo-pages" alt="logo" />
                <img src={MLBLogo} className = "Logos" alt="MLB" />

            <p>MLB page!</p>

               </body>
        );
    }
}

export default Mlb;
