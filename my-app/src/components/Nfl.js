import React from 'react';
import NFLLogo from '../../assets/images/NFL.png';
import Logo from '../../assets/images/LDBLogo.png';
import './Logos.css';
import './Pages.css';

class Nfl extends React.Component {  
    render()
    {
        return(
        <body className = "Pages">
             <div>
             <img src={Logo} className="App-logo-pages" alt="logo" />
             <img src={NFLLogo} className = "Logos" alt="NFL" />
            
             </div>
         
        <p>NFL page!</p>
        
           </body>
           );
    }
}

export default Nfl; 