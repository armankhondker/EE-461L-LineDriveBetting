import React from 'react';
import Arman from '../assets/images/Arman_Profile_Pic.jpg'
import Josh from '../assets/images/Josh_Profile_Pic.jpg'
import './About.css'

class About extends React.Component {
    render()
    {
        return(
            <div>
            <body className="About">
           <h1>LineDriveBetting - an aggregated sports betting data website</h1>

           <p><h1>Vision</h1>
           The vision for LineDriveBetting is to provide both an aggregated betting analytics
           platform that provides bettors nationwide with moneyline and point spreads from the most popular websites,
           as well as a reddit-like blog forum to have intellectual conversations about betting lines.
           </p>

           <p><h1>Intended Users:</h1>
           LineDriveBetting aims to target all bettors and sports enthusiasts. By providing a single hub for all
           necessary betting data of their desired team as well as a discussion forum, there are numerous use cases.
           Bettors who are looking for opportune bets benefit from the display of information of different betting websites,
           sports fan’s interested in aggregated data of win predictions for their favorite teams, and people looking to argue
           about why they think a certain team will win all benefit from LineDriveBetting’s platform.

          <h2>LineDriveBetting Development Team:</h2>
           </p>

           <ul>Arman Khondker
           { <img class="prof_pic" src={Arman} alt="Arman" /> }
           <br></br>
               Bio: A senior Computer Engineering student with technical cores in Software Engineering and Academic enrichmnent
               <br></br>
               Major: Electrical and Computer Engineering
               <br></br>
               Responsibilites:
               <br></br>
               Number of Commits:
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>

           <ul>Josh Papermaster
              { <img class="prof_pic" src={Josh} alt="Josh" /> }
              <br></br>
               Bio: A senior Computer Engineering student with technical cores in Software Engineering and Academic enrichmnent
               <br></br>
               Major: Electrical and Computer Engineering
               <br></br>
               Responsibilites: Backend development, database management, and web scraping
               <br></br>
               Number of Commits:
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>


           <ul>Punit Patel
              <br></br>
               Bio:
               <br></br>
               Major:
               <br></br>
               Responsibilites:
               <br></br>
               Number of Commits:
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>


           <ul>Zachary Herink
               Bio:
               <br></br>
               Major:
               <br></br>
               Responsibilites:
               <br></br>
               Number of Commits:
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>

          <ul>Thienson Ho
               <br></br>
               Bio:
               <br></br>
               Major:
               <br></br>
               Responsibilites:
               <br></br>
               Number of Commits:
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>

           <ul>Rohan Garg
               <br></br>
               Bio:
               <br></br>
               Major:
               <br></br>
               Responsibilites:
               <br></br>
               Number of Commits:
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>

           </body>

            </div>
        )
    }

}

export default About;
