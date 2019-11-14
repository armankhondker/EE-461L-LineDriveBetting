import React from "react";
import './Pages.css';
import OddsTable from "../components/OddsTable";
import LineGraph from "../components/LineGraph";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button"

class Game extends React.Component {
      constructor(props) {
        super(props);
        this.state= {
          team1_ml_Data : null,
          team2_ml_Data : null,
          team1_ps_Data : null,
          team2_ps_Data : null,
          openingCSS : "primary",
          bovadaCSS : "success",
          betonlineCSS : "primary",
          intertopsCSS : "primary",
          sportsbettingCSS : "primary",
          betnowCSS : "primary"
        };
        this.setOpening = this.setOpening.bind(this);
        this.setBovada = this.setBovada.bind(this);
        this.setBetonline = this.setBetonline.bind(this);
        this.setIntertops = this.setIntertops.bind(this);
        this.setSportsbetting = this.setSportsbetting.bind(this);
        this.setBetnow = this.setBetnow.bind(this);
      }

      setOpening() {
          this.setState({
            team1_ml_Data : this.props.gameData.opening_ml_1,
            team2_ml_Data : this.props.gameData.opening_ml_2,
            team1_ps_Data : this.props.gameData.opening_ps_1,
            team2_ps_Data : this.props.gameData.opening_ps_2,
            openingCSS : "success",
            bovadaCSS : "primary",
            betonlineCSS : "primary",
            intertopsCSS : "primary",
            sportsbettingCSS : "primary",
            betnowCSS : "primary"
          });
        }

      setBovada() {
          this.setState({
            team1_ml_Data : this.props.gameData.bovada_ml_1,
            team2_ml_Data : this.props.gameData.bovada_ml_2,
            team1_ps_Data : this.props.gameData.bovada_ps_1,
            team2_ps_Data : this.props.gameData.bovada_ps_2,
            openingCSS : "primary",
            bovadaCSS : "success",
            betonlineCSS : "primary",
            intertopsCSS : "primary",
            sportsbettingCSS : "primary",
            betnowCSS : "primary"
          });
      }

      setBetonline() {
          this.setState({
            team1_ml_Data : this.props.gameData.betonline_ml_1,
            team2_ml_Data : this.props.gameData.betonline_ml_2,
            team1_ps_Data : this.props.gameData.betonline_ps_1,
            team2_ps_Data : this.props.gameData.betonline_ps_2,
            openingCSS : "primary",
            bovadaCSS : "primary",
            betonlineCSS : "success",
            intertopsCSS : "primary",
            sportsbettingCSS : "primary",
            betnowCSS : "primary"
          });
      }

      setIntertops() {
          this.setState({
            team1_ml_Data : this.props.gameData.intertops_ml_1,
            team2_ml_Data : this.props.gameData.intertops_ml_2,
            team1_ps_Data : this.props.gameData.intertops_ps_1,
            team2_ps_Data : this.props.gameData.intertops_ps_2,
            openingCSS : "primary",
            bovadaCSS : "primary",
            betonlineCSS : "primary",
            intertopsCSS : "success",
            sportsbettingCSS : "primary",
            betnowCSS : "primary"
          });
      }

      setSportsbetting() {
          this.setState({
            team1_ml_Data : this.props.gameData.sportsbetting_ml_1,
            team2_ml_Data : this.props.gameData.sportsbetting_ml_2,
            team1_ps_Data : this.props.gameData.sportsbetting_ps_1,
            team2_ps_Data : this.props.gameData.sportsbetting_ps_2,
            openingCSS : "primary",
            bovadaCSS : "primary",
            betonlineCSS : "primary",
            intertopsCSS : "primary",
            sportsbettingCSS : "success",
            betnowCSS : "primary"
          });
      }

      setBetnow() {
          this.setState({
            team1_ml_Data : this.props.gameData.betnow_ml_1,
            team2_ml_Data : this.props.gameData.betnow_ml_2,
            team1_ps_Data : this.props.gameData.betnow_ps_1,
            team2_ps_Data : this.props.gameData.betnow_ps_2,
            openingCSS : "primary",
            bovadaCSS : "primary",
            betonlineCSS : "primary",
            intertopsCSS : "primary",
            sportsbettingCSS : "primary",
            betnowCSS : "success"
          });
      }

      render() {
      var gameData = this.props.gameData;
      var team1_ml_Data = this.state.team1_ml_Data;
      var team2_ml_Data = this.state.team2_ml_Data;
      var team1_ps_Data = this.state.team1_ps_Data;
      var team2_ps_Data = this.state.team2_ps_Data;
      return(
          <div className="Pages-Nfl" style={{ fontSize: '20px' }}>
              <div style={{ maxWidth: '80vw'}}>
                  <br/>
                  <br/>
                  <br/>
                  <h1>Point Spread</h1>
                  <OddsTable
                      team1={gameData.team1}
                      opening1={gameData.opening_ps_1.slice(-1)[0]}
                      bovada1={gameData.bovada_ps_1.slice(-1)[0]}
                      betonline1={gameData.betonline_ps_1.slice(-1)[0]}
                      intertops1={gameData.intertops_ps_1.slice(-1)[0]}
                      sportsbetting1={gameData.sportsbetting_ps_1.slice(-1)[0]}
                      betnow1={gameData.betnow_ps_1.slice(-1)[0]}
                      team2={gameData.team2}
                      opening2={gameData.opening_ps_2.slice(-1)[0]}
                      bovada2={gameData.bovada_ps_2.slice(-1)[0]}
                      betonline2={gameData.betonline_ps_2.slice(-1)[0]}
                      intertops2={gameData.intertops_ps_2.slice(-1)[0]}
                      sportsbetting2={gameData.sportsbetting_ps_2.slice(-1)[0]}
                      betnow2={gameData.betnow_ps_2.slice(-1)[0]}
                  />
                  <br/>
                  <LineGraph team1={gameData.team1} team2={gameData.team2} team1_Data={team1_ps_Data == null ? gameData.bovada_ps_1 : team1_ps_Data} team2_Data={team2_ps_Data == null ? gameData.bovada_ps_2 : team2_ps_Data}  times={gameData.sys_time}/>
                  <Table className="chartClicker" striped bordered hover variant="dark" size="sm">
                      <thead>
                          <tr>
                              <th>CHART:</th>
                              <th><Button variant={this.state.openingCSS} onClick={() => this.setOpening()}>OPENING</Button></th>
                              <th><Button variant={this.state.bovadaCSS} onClick={() => this.setBovada()}>BOVADA</Button></th>
                              <th><Button variant={this.state.betonlineCSS} onClick={() => this.setBetonline()}>BETONLINE</Button></th>
                              <th><Button variant={this.state.intertopsCSS} onClick={() => this.setIntertops()}>intertops</Button></th>
                              <th><Button variant={this.state.sportsbettingCSS} onClick={() => this.setSportsbetting()}>SPORTSBETTING</Button></th>
                              <th><Button variant={this.state.betnowCSS} onClick={() => this.setBetnow()}>BETNOW</Button></th>
                          </tr>
                      </thead>
                  </Table>
                  <br/>
                  <h1>Money Line</h1>
                  <OddsTable
                      team1={gameData.team1}
                      opening1={gameData.opening_ml_1.slice(-1)[0]}
                      bovada1={gameData.bovada_ml_1.slice(-1)[0]}
                      betonline1={gameData.betonline_ml_1.slice(-1)[0]}
                      intertops1={gameData.intertops_ml_1.slice(-1)[0]}
                      sportsbetting1={gameData.sportsbetting_ml_1.slice(-1)[0]}
                      betnow1={gameData.betnow_ml_1.slice(-1)[0]}
                      team2={gameData.team2}
                      opening2={gameData.opening_ml_2.slice(-1)[0]}
                      bovada2={gameData.bovada_ml_2.slice(-1)[0]}
                      betonline2={gameData.betonline_ml_2.slice(-1)[0]}
                      intertops2={gameData.intertops_ml_2.slice(-1)[0]}
                      sportsbetting2={gameData.sportsbetting_ml_2.slice(-1)[0]}
                      betnow2={gameData.betnow_ml_2.slice(-1)[0]}
                  />
                  <br/>
                  <LineGraph team1={gameData.team1} team2={gameData.team2} team1_Data={team1_ml_Data == null ? gameData.bovada_ps_1 : team1_ml_Data} team2_Data={team2_ml_Data == null ? gameData.bovada_ps_2 : team2_ml_Data}  times={gameData.sys_time}/>
                  <Table className="chartClicker" striped bordered hover variant="dark" size="sm">
                      <thead>
                          <tr>
                              <th>CHART:</th>
                              <th><Button variant={this.state.openingCSS} onClick={() => this.setOpening()}>OPENING</Button></th>
                              <th><Button variant={this.state.bovadaCSS} onClick={() => this.setBovada()}>BOVADA</Button></th>
                              <th><Button variant={this.state.betonlineCSS} onClick={() => this.setBetonline()}>BETONLINE</Button></th>
                              <th><Button variant={this.state.intertopsCSS} onClick={() => this.setIntertops()}>intertops</Button></th>
                              <th><Button variant={this.state.sportsbettingCSS} onClick={() => this.setSportsbetting()}>SPORTSBETTING</Button></th>
                              <th><Button variant={this.state.betnowCSS} onClick={() => this.setBetnow()}>BETNOW</Button></th>
                          </tr>
                      </thead>
                  </Table>
                  <br/>
              </div>
          </div>
      );
    }
}

export default Game;
