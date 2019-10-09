import React from 'react';
import NBALogo from '../../assets/images/NBA.png';
import Logo from '../../assets/images/LDBLogo.png';
import './Logos.css';
import './Pages.css';

class Nba extends React.Component {  
    render()
    {

        return(
            <div className="Pages">
    
                <img src={Logo} className="App-logo-pages" alt="logo" />
                <img src={NBALogo} className = "Logos" alt="NBA" />

                
           <p>NBA page!</p>
         



            </div>
           


        );
    }

}

export default Nba; 