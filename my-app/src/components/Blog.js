import React from 'react';
import Logo from '../assets/images/LDBLogo.png';
import './Logos.css';
import '../pages/Pages.css';

class Blog extends React.Component {
    render()
    {
        return(
            <div className = "App">
            <body className = "Pages">
                 <h1>Placeholder</h1>
                 <img src={Logo} className="App-logo-pages" alt="logo" />

           <h2>BLOG POSTS HERE</h2>

               </body>

               </div>
        );
    }
}
export default Blog;
