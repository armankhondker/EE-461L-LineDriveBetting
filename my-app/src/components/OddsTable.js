import React from "react";
import Table from 'react-bootstrap/Table';

function OddsTable(props) {
    return(
        <Table striped bordered hover variant="dark" size="sm">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>OPENING</th>
                    <th>BOVADA</th>
                    <th>BETONLINE</th>
                    <th>intertops</th>
                    <th>SPORTSBETTING</th>
                    <th>BETNOW</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.team1}</td>
                    <td>{props.opening1}</td>
                    <td>{props.bovada1}</td>
                    <td>{props.betonline1}</td>
                    <td>{props.intertops1}</td>
                    <td>{props.sportsbetting2}</td>
                    <td>{props.betnow1}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>{props.team2}</td>
                    <td>{props.opening2}</td>
                    <td>{props.bovada2}</td>
                    <td>{props.betonline2}</td>
                    <td>{props.intertops2}</td>
                    <td>{props.sportsbetting2}</td>
                    <td>{props.betnow2}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default OddsTable;
