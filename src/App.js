import React, { useState } from "react";
import { GameEngine } from "react-game-engine";
import { MoveAsteroid, MoveMobileRocket, MoveRocket } from "./systems"
import {Rocket} from "./entities/Rocket";
import Score from './entities/Score'
import StarfieldAnimation from 'react-starfield-animation'
import { Asteroid } from "./entities/Asteroid";
import {isMobile} from 'react-device-detect';
import {get, set} from 'idb-keyval'
import 'font-awesome/css/font-awesome.min.css';
const ships = {
  rocket: "rocket.png",
  tardis: "tardis.png"
}

const speeds = {
  easy: 10,
  medium: 15,
  hard: 20
}

const getHighestScores = async () => {
 return await get("highest-scores")
}

const getStoredShip = async () => {
  return await get("ship")
}

export default function SimpleGame(props) {
    const [running, setRunning] = useState(false);
    const [mode, setMode] = useState("medium");
    const [lastScore, setLastScore] = useState();
    const [ship, setShip] = useState("rocket")
    getStoredShip().then(ship => setShip(ship || "rocket"))
    if (running) {
      return (
        <div>
        <GameEngine
          running={running}
          style={{ width: "100%", height: "100vh", backgroundColor: "black" }}
          systems={[MoveAsteroid, isMobile ?  MoveMobileRocket : MoveRocket]}
          entities={{
            rocket: {image: ships[ship], x: window.innerWidth / 2, y: 15, target: window.innerWidth / 2, renderer: <Rocket/>},
            asteroid: {x: 15, y: window.innerHeight - 100, speed: speeds[mode], renderer: <Asteroid/>},
            score: {score: 0, lives: 3, gameOver: async (score) => {
              setLastScore(score)
              getHighestScores(highestScores => {
                if (!highestScores[mode]){
                  highestScores[mode] = score
                  set('highest-scores', highestScores);
                } else if (score > highestScores[mode]) {
                  highestScores[mode] = score
                  set('highest-scores', highestScores);
                }
              })
              setRunning(false)
            }, renderer: <Score/>},
          }}>
            <div>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}
            />
            </div>
        </GameEngine>           
      </div>)
    } else {
      return <div className="space menu"> 
            <div className="menu-title">
              SPACE RUN
            </div>
            {lastScore ? <div className="menu-score sm">Score: {lastScore}</div>: <div />}
            <div className="menu-item" onClick={() => {setRunning(true)}}>
              {lastScore ? "REPLAY" : "PLAY"}
            </div>
            <div className="sm menu-selector">
              Ship
              <br/>
              <div className="menu-selector-item menu-item menu-arrow" onClick={() => {
                const newShip = ship === "rocket" ? "tardis" : "rocket"
                setShip(newShip)
                set("ship", newShip)
              }}>
                <i className="fa fa-arrow-circle-left"/>
              </div>
              <div className="menu-selector-item menu-item menu-selector-label">
                <img style={{height: 23, marginRight: 10}} src={"/"+ships[ship]} alt="ship menu"></img>
                {ship}
              </div>
              <div className="menu-selector-item menu-item menu-arrow" onClick={() => {
                const newShip = ship === "rocket" ? "tardis" : "rocket"
                setShip(newShip)
                set("ship", newShip)
              }}>
                <i className="fa fa-arrow-circle-right"/>
              </div>
            </div>

            <div className="sm menu-selector">
              Mode
              <br/>
              <div className="menu-selector-item menu-item menu-arrow" onClick={() => {
                let newMode = "";
                switch(mode){
                  case "easy":
                    newMode = "hard"
                    break;
                  case "medium":
                    newMode = "easy";
                    break;
                  default:
                    newMode = "medium";
                    break;
                }
                setMode(newMode)
              }}>
                <i className="fa fa-arrow-circle-left"/>
              </div>
              <div className="menu-selector-item menu-item menu-selector-label">
                {mode}
              </div>
              <div className="menu-selector-item menu-item menu-arrow" onClick={() => {
                let newMode = "";
                switch(mode){
                  case "easy":
                    newMode = "medium"
                    break;
                  case "medium":
                    newMode = "hard";
                    break;
                  default:
                    newMode = "easy";
                    break;
                }
                setMode(newMode)
              }}>
                <i className="fa fa-arrow-circle-right"/>
              </div>
            </div>

      </div>
    };  
}