import React from 'react';
import './Pages.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nflTeams: null,
            nbaTeams: null,
            mlbTeams: null,
            allTeams: [],
        }
    }

    async componentDidMount() {
        await fetch('/NFL/Teams.json')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    this.setState({
                        nflTeams: data
                    });
                })
            })
            .catch(err => console.log(err));

        await fetch('/NBA/Teams.json')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    this.setState({
                        nbaTeams: data
                    });
                })
            })
            .catch(err => console.log(err));
            
        await fetch('/MLB/Teams.json')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    this.setState({
                        mlbTeams: data
                    });
                })
            })
            .catch(err => console.log(err)); 
            
        var combinedTeams = [].concat(this.state.mlbTeams, this.state.nbaTeams, this.state.nflTeams);
        combinedTeams.shift();
        console.log(combinedTeams);
        this.setState({ allTeams: combinedTeams });    
    }

    render() {
        return(
            <div className="Pages-Search">
                <br/>
                <br/>
                <Form inline>
                        <FormControl size="lg" type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Go</Button>
                </Form>
            </div>
        );
    }


}

export default Search;