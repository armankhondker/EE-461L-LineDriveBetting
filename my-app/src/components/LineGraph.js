import React from 'react';
import {Line} from "react-chartjs-2";

function LineGraph(props) {
    let gameData = props.gameData;
    let times = gameData.sys_time;
    let T1;
    let T2;
    console.log(gameData);
    let xLabels = [];
    let team1Data = [];
    let team2Data = [];

    console.log(props.type);

    if(props.type === 'ml') {
        T1 = gameData.bovada_ml_1;
        T2 = gameData.bovada_ml_2;
    } else if(props.type === 'ps') {
        T1 = gameData.bovada_ps_1;
        T2 = gameData.bovada_ps_2;
    }

    console.log(T1);
    let i;
    //Loop through the amount of data points. Assume that all the arrays have the same size
    for(i = 0; i < times.length; i++) {
        let time = times[i];
        let hour;
        let min;

        //format hours to have 2 digits
        if(time[3].toString().length === 1) {
            hour = '0' + time[3].toString();
        } else {
            hour = time[3];
        }

        //format minutes to have 2 digits
        if(time[4].toString().length === 1) {
            min = '0' + time[4].toString();
        } else {
            min = time[4]
        }

        //Build the time label from sys_time data
        const timeConstruct = `${time[1]}/${time[2]}, ${hour}:${min}`;
        xLabels.push(timeConstruct);

        team1Data.push(T1[i]);
        team2Data.push(T2[i]);

    }

    console.log(xLabels);

    const color1 = 'rgba(255,0,0,1)';
    const color2 = 'rgba(75,192,192,1)';
    const data = {
        labels: xLabels,
        datasets: [
            {
                label: gameData.team1,
                fill: false,
                lineTension: 0.1,
                backgroundColor: color1,
                borderColor: color1,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: color1,
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: color1,
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: team1Data,
            },
            {
                label: gameData.team2,
                fill: false,
                lineTension: 0.1,
                backgroundColor: color2,
                borderColor: color2,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: color2,
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: color2,
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: team2Data,
            }
        ]
    };

    return (
        <>
            <Line data={data} />
        </>
    );
}

export default LineGraph;

