import React from 'react';
import Arman from '../assets/images/Arman_Profile_Pic.jpg'
import Josh from '../assets/images/Josh_Profile_Pic.jpg'
import Punit from '../assets/images/Punit_Profile_Pic.jpg'
import ThienSon from '../assets/images/ThienSon_Profile_Pic.jpg';
import Rohan from '../assets/images/Rohan_Profile_Pic.jpg'
import Zachary from '../assets/images/Zachary_Profile_Pic.jpg'
import './About.css'

class About extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        rohangit: {
          total: null
        },
        punitgit: {
          total: null
        },
        zachgit: {
          total: null
        },
        thiensongit: {
          total: null
        },
        joshgit: {
          total: null
        },
        armangit: {
          total: null
        }
      };
    }

    // Apologize for the ugly code but this was the only way to determine who is who since the order changes
    componentDidMount() {
      fetch('https://api.github.com/repos/armankhondker/ee-461l-linedrivebetting/stats/contributors?access_token=4498e22ed10af7668695cb5afa35c77ccf635b62&anon=true')
        .then(response => response.json())
        .then(data => this.setState({
          rohangit: data[0].author.login == "rohanvgarg" ? data[0] : data[1].author.login == "rohanvgarg" ? data[1] : data[2].author.login == "rohanvgarg" ? data[2] : data[3].author.login == "rohanvgarg" ? data[3] : data[4].author.login == "rohanvgarg" ? data[4] : data[5],
          punitgit: data[0].author.login == "PatelPunit" ? data[0] : data[1].author.login == "PatelPunit" ? data[1] : data[2].author.login == "PatelPunit" ? data[2] : data[3].author.login == "PatelPunit" ? data[3] : data[4].author.login == "PatelPunit" ? data[4] : data[5],
          zachgit: data[0].author.login == "zherink" ? data[0] : data[1].author.login == "zherink" ? data[1] : data[2].author.login == "zherink" ? data[2] : data[3].author.login == "zherink" ? data[3] : data[4].author.login == "zherink" ? data[4] : data[5],
          thiensongit: data[0].author.login == "thienson-ho" ? data[0] : data[1].author.login == "thienson-ho" ? data[1] : data[2].author.login == "thienson-ho" ? data[2] : data[3].author.login == "thienson-ho" ? data[3] : data[4].author.login == "thienson-ho" ? data[4] : data[5],
          joshgit: data[0].author.login == "joshpapermaster" ? data[0] : data[1].author.login == "joshpapermaster" ? data[1] : data[2].author.login == "joshpapermaster" ? data[2] : data[3].author.login == "joshpapermaster" ? data[3] : data[4].author.login == "joshpapermaster" ? data[4] : data[5],
          armangit: data[0].author.login == "ArmanKhondker" ? data[0] : data[1].author.login == "ArmanKhondker" ? data[1] : data[2].author.login == "ArmanKhondker" ? data[2] : data[3].author.login == "ArmanKhondker" ? data[3] : data[4].author.login == "ArmanKhondker" ? data[4] : data[5],
        }));
    }

    render()
    {
        return(
            <div>
            <body className="About">
           <h1>LineDriveBetting - an aggregated sports betting data website</h1>

           <p><h1 className = "AboutTitles">  Vision</h1>
           The vision for LineDriveBetting is to provide both an aggregated betting analytics
           platform that provides bettors nationwide with moneyline and point spreads from the most popular websites,
           as well as a reddit-like blog forum to have intellectual conversations about betting lines.
           </p>

           <p><h1>Intended Users</h1>
           LineDriveBetting aims to target all bettors and sports enthusiasts. By providing a single hub for all
           necessary betting data of their desired team as well as a discussion forum, there are numerous use cases.
           Bettors who are looking for opportune bets benefit from the display of information of different betting websites,
           sports fan’s interested in aggregated data of win predictions for their favorite teams, and people looking to argue
           about why they think a certain team will win all benefit from LineDriveBetting’s platform.
           </p>

           <p><h1>LineDriveBetting Development Team</h1>
           </p>

           <ul><b>Arman Khondker</b>
           { <img class="prof_pic" src={Arman} alt="Arman" /> }
           <br></br>
               Bio: A senior Computer Engineering student with technical cores in Software Engineering and Academic enrichmnent
               <br></br>
               Major: Electrical and Computer Engineering
               <br></br>
               Responsibilites: Front End Development in React, Set up website hosting, Set up about page, Wrote User Stories, Design Report
               <br></br>
               Number of Commits: {this.state.armangit.total}
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>

           <ul><b>Josh Papermaster</b>
              { <img class="prof_pic" src={Josh} alt="Josh" /> }
              <br></br>
               Bio: A senior Computer Engineering student with technical cores in Software Engineering and Academic enrichmnent
               <br></br>
               Major: Electrical and Computer Engineering
               <br></br>
               Responsibilites: Backend development using AWS S3, Set up MongoDB, Built API using Node.js, Set up website hosting, Web scraping
               <br></br>
               Number of Commits: {this.state.joshgit.total}
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>


           <ul><b>Punit Patel </b>
           { <img class="prof_pic" src={Punit} alt="Punit" /> }
              <br></br>
               Bio:A senior Computer Engineering student with technical cores in Software Engineering and Academic Enrichmnent
               <br></br>
               Major: Electrical and Computer Engineering
               <br></br>
               Responsibilites: Front End Development, User Interface, and Design Report
               <br></br>
               Number of Commits: {this.state.punitgit.total}
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>


           <ul><b>Zachary Herink </b>
           { <img class="prof_pic" src={Zachary} alt="Zachary" /> }
               Bio: A senior Computer Engineering student with technical cores in Software Engineering and Academic Enrichment
               <br></br>
               Major: Electrical and Computer Engineering
               <br></br>
               Responsibilites: Back End Development, Data Collection, Web Scraping, API Handling
               <br></br>
               Number of Commits: {this.state.zachgit.total}
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>

          <ul>ThienSon Ho
              { <img class="prof_pic" src={ThienSon} alt="ThienSon" /> }
               <br></br>
               Bio: A senior ECE student with technical cores in Software Engineering and Academic Enrichment
               <br></br>
               Major: Electrical and Computer Engineering
               <br></br>
               Responsibilites: Front End Development, User Interface
               <br></br>
               Number of Commits: {this.state.thiensongit.total}
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>

           <ul>Rohan Garg
           { <img class="prof_pic" src ={Rohan} alt = "Rohan" /> }
	       <br></br>
               Bio: A senior Computer Engineering student with technical cores in Software Engineering and Academic Enrichment.
               <br></br>
               Major: Electrical and Computer Engineering.
               <br></br>
               Responsibilites: Backend Development, User Interface, and  Design Report
               <br></br>
               Number of Commits: {this.state.rohangit.total}
               <br></br>
               Total Number of Unit Tests:
               <br></br>
               Total Number of Issues:
               <br></br>
           </ul>

           <p><h1>Data</h1>
           We will scrape data from the following websites:
           ESPN.com, FiveThirtyEight.com ,The-odds-api.com, Oddshark.com
           <br></br>
           The data we will specifically be pulling are: the scores of previous games, the former head to head results, and all betting lines (money line, point spread, and over/under) for all NBA, NFL, and MLB games. The data will be scraped from the following websites and API endpoints:
           <br></br>
            http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard (NFL scores)
            <br></br>
            http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard (NBA scores)
            <br></br>
            http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard (MLB scores)
            <br></br>
            https://data.fivethirtyeight.com/ (NFL, NBA, and MLB predictions)
            <br></br>
            https://the-odds-api.com/ (NFL, NBA, and MLB betting lines)
            <br></br>
            https://www.oddsshark.com/nfl/odds (NFL odds)
            <br></br>
            https://www.oddsshark.com/nba/odds (NBA odds)
            <br></br>
            https://www.oddsshark.com/mlb/odds (MLB odds)
            <br></br>


           </p>

           <p><h1>Tools</h1>
            React: Front End Javascript Framework
            <br></br>
            Github API: User stats dynamically pulled from Github.com
            <br></br>
            Amazon Web Services: Hosting of web applicaiton
            <br></br>
            Python: Backend webscrapping
            <br></br>
            MongoDB: Database to store our scrapping data
            <br></br>
            Namecheap: Purchase linedrivebetting domain
            <br></br>
           </p>


           <p><h1>Link to Github</h1>
           https://github.com/ArmanKhondker/EE-461L-LineDriveBetting
           </p>

           </body>

            </div>
        )
    }

}

export default About;
