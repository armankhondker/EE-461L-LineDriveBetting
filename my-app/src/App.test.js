import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import GameBar from "./components/GameBar";
import Home from "./pages/Home";
import {BrowserRouter, Route} from "react-router-dom";
import Football from './assets/images/white-football.png';
import ImgButton from "./components/ImgButton";
import StickNavbar from "./components/StickyNavbar";
import OddsTable from "./components/OddsTable";

configure({ adapter: new Adapter() });
var gameData = {
    "sys_time": [
    [
        2019,
        10,
        23,
        23,
        0,
        35,
        2,
        296,
        0
    ],
    [
        2019,
        10,
        24,
        0,
        0,
        53,
        3,
        297,
        0
    ],
    [
        2019,
        10,
        24,
        1,
        0,
        29,
        3,
        297,
        0
    ],
    [
        2019,
        10,
        24,
        2,
        0,
        31,
        3,
        297,
        0
    ],
    [
        2019,
        10,
        24,
        3,
        0,
        26,
        3,
        297,
        0
    ]
],
    "opening_ps_1": [
    "+14",
    "+14",
    "+14",
    "+14",
    "+14"
],
    "opening_ml_1": [
    "-110",
    "-110",
    "-110",
    "-110",
    "-110"
],
    "opening_ps_2": [
    "-14",
    "-14",
    "-14",
    "-14",
    "-14"
],
    "opening_ml_2": [
    "-110",
    "-110",
    "-110",
    "-110",
    "-110"
],
    "bovada_ps_1": [
    "+16.5",
    "+16.5",
    "+16.5",
    "+16.5",
    "+16.5"
],
    "bovada_ml_1": [
    "-110",
    "-110",
    "-105",
    "-105",
    "-105"
],
    "bovada_ps_2": [
    "-16.5",
    "-16.5",
    "-16.5",
    "-16.5",
    "-16.5"
],
    "bovada_ml_2": [
    "-110",
    "-110",
    "-115",
    "-115",
    "-115"
],
    "betonline_ps_1": [
    "+16.5",
    "+16.5",
    "+16.5",
    "+16.5",
    "+16.5"
],
    "betonline_ml_1": [
    "-113",
    "-113",
    "-110",
    "-108",
    "-108"
],
    "betonline_ps_2": [
    "-16.5",
    "-16.5",
    "-16.5",
    "-16.5",
    "-16.5"
],
    "betonline_ml_2": [
    "-107",
    "-107",
    "-110",
    "-112",
    "-112"
],
    "intertops_ps_1": [
    "+16",
    "+16",
    "+16.5",
    "+16.5",
    "+16.5"
],
    "intertops_ml_1": [
    "-110",
    "-110",
    "-110",
    "-110",
    "-110"
],
    "intertops_ps_2": [
    "-16",
    "-16",
    "-16.5",
    "-16.5",
    "-16.5"
],
    "intertops_ml_2": [
    "-110",
    "-110",
    "-110",
    "-110",
    "-110"
],
    "sportsbetting_ps_1": [
    "+16.5",
    "+16.5",
    "+16.5",
    "+16.5",
    "+16.5"
],
    "sportsbetting_ml_1": [
    "-113",
    "-113",
    "-110",
    "-108",
    "-108"
],
    "sportsbetting_ps_2": [
    "-16.5",
    "-16.5",
    "-16.5",
    "-16.5",
    "-16.5"
],
    "sportsbetting_ml_2": [
    "-107",
    "-107",
    "-110",
    "-112",
    "-112"
],
    "betnow_ps_1": [
    "+16",
    "+16",
    "+16.5",
    "+16.5",
    "+16.5"
],
    "betnow_ml_1": [
    "-110",
    "-110",
    "-109",
    "-109",
    "-109"
],
    "betnow_ps_2": [
    "-16",
    "-16",
    "-16.5",
    "-16.5",
    "-16.5"
],
    "betnow_ml_2": [
    "-110",
    "-110",
    "-111",
    "-111",
    "-111"
],
    "_id": "5db0db93cf000e7ac727975e",
    "date": "October 24, 2019, 8:20 PM ET",
    "time": "8:20p",
    "team1": "Washington",
    "team2": "Minnesota",
    "create_date": "2019-10-24T03:16:22.568Z"
};

describe('Components test', ()=> {
    it('should render GameBar', function() {
          const league = 'NFL';
          const team1 = 'HOU';
          const team2 = 'JAX';
          const dateTime = 'October 26, 2019, 8:07 PM ET';
          const spread1 = '-3';
          const spread2 = '+3';

          const wrapper = shallow(<GameBar
              league={league}
              team1={team1}
              team2={team2}
              date={dateTime}
              spread1={spread1}
              spread2={spread2}
              link="none"
          />);

          let expectedDiv = <h3>HOU -3</h3>;
          let actualValue = wrapper.contains(expectedDiv);
          expect(actualValue).to.equal(true);

          expectedDiv = <h3>+3 JAX</h3>;
          actualValue = wrapper.contains(expectedDiv);
          expect(actualValue).to.equal(true);
      });
  it('should render ImgButton', function() {
      const wrapper = shallow(<ImgButton image={Football} label="NFL" path="nfl"/>);
      let expected = 'NFL';
      let actualValue = wrapper.contains(expected);
      expect(actualValue).to.equal(true);
  });
  it('should render StickyNavbar', function () {
      const wrapper = shallow(<StickNavbar/>);
      let expected = 'LineDriveBetting';
      let actualValue = wrapper.contains(expected);
      expect(actualValue).to.equal(true);
  })
    it('should render OddsTable', function () {
        const wrapper = shallow(<OddsTable
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
        />);
        let expected = <td>Washington</td>;
        let actualValue = wrapper.contains(expected);
        expect(actualValue).to.equal(true);
    })
});
