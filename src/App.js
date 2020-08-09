import React, { useState } from "react";
import { GameEngine } from "react-game-engine";
import { MoveRocket, MoveAsteroid } from "./systems"
import {Rocket} from "./entities/Rocket";
import Score from './entities/Score'
import StarfieldAnimation from 'react-starfield-animation'
import { Asteroid } from "./entities/Asteroid";
 
export default function SimpleGame(props) {
    const [running, setRunning] = useState(false);
    const [lastScore, setLastScore] = useState();
    if (running) {
      return (
        <div>
        <GameEngine
          running={running}
          style={{ width: "100%", height: "100vh", backgroundColor: "black" }}
          systems={[MoveRocket, MoveAsteroid]}
          entities={{
            rocket: {x: window.innerWidth / 2, y: 15, target: window.innerWidth / 2, renderer: <Rocket/>},
            asteroid: {x: 15, y: window.innerHeight - 100, speed: 15, renderer: <Asteroid/>},
            score: {score: 0, lives: 5, gameOver: (score) => {
              setLastScore(score)
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
      return <div className="space" style={{fontSize: 50, position: "absolute", width: "100%", height: "100vh", backgroundColor: "black"}}> 
            <div style={{color: "white", textAlign: "center", marginTop: 50, marginBottom: 50}}>
              SPACE RUN
            </div>
            {lastScore? <div style={{color: "white", marginBottom: 20, fontSize: 25, textAlign: "center"}}>Score: {lastScore}</div>: <div />}
            <div style={{textAlign: "center"}}>
              <div onClick={() => {setRunning(true)}} style={{color: "white", textAllign: "center", margin: "0 auto", borderRadius: 40, background: "linear-gradient(to right top, #052337, #273162, #6c327a, #b51a72, #eb124b)", width: "90%", height: "30%"}}>
                {lastScore ? "REPLAY" : "PLAY"}
              </div>
            </div>
      </div>
    };  
}