import React from 'react';
import MLBLogo from '../assets/images/MLB.png';
import Logo from '../assets/images/LDBLogo.png';
import './Logos.css';
import './Pages.css';

class Blog extends React.Component {
    render()
    {
        return(
            <body className = "Pages">
                 <h1>Placeholder</h1>
                 <img src={Logo} className="App-logo-pages" alt="logo" />

            <p>HEYY</p>

               </body>
        );
    }
}
export default Blog;
