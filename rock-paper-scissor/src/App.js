import React, { useState,useEffect } from "react";
import "./App.css";
import { FaHandPaper } from "react-icons/fa";
import { FaFistRaised } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";

function App() {
  // const actions = {
  //   rock: FaFistRaised,
  //   paper: FaHandPaper,
  //   scissor: FaHandPeace

  // }
  function player(action) {

    if (action === "rock") {
      setChoice(<FaFistRaised size={70} />);
    } else if (action === "paper") {
      setChoice(<FaHandPaper size={70} />);
    } else {
      setChoice(<FaHandPeace size={70} />);
    }
  Computer();
  }

  function Computer(){
    const choices = [FaFistRaised, FaHandPaper, FaHandPeace ];
    setComputechoice(choices[Math.floor(Math.random() * 3)]);
  };

  const [score, setScore] = useState("0");
  const [choice, setChoice] = useState("");
  const [computechoice, setComputechoice] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const Result = () => {
    if (choice === FaFistRaised && computechoice === FaHandPeace) {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (choice === FaFistRaised && computechoice === FaHandPaper) {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (choice === FaHandPeace && computechoice === FaHandPaper) {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (choice === FaHandPeace && computechoice === FaFistRaised) {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (choice === FaHandPaper && computechoice === FaFistRaised) {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (choice === FaHandPaper && computechoice === FaHandPeace) {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  
  // const [result, setResult] = useState("Player Wins");
  return (
    <div className="first">
      <h1 className="title">ROCK-PAPER-SCISSOR</h1>
      <div className="second">
        <div className="container">
          <div className="player">
            <div className="play">Player: {score}</div>
            <div>{choice}</div>
          </div>
          <div className="player">
            <div className="play">Computer: {score}</div>
            <div>{computechoice}</div>
          </div>
        </div>
        <div>
          <button onClick={() => player("rock")}>
            <FaFistRaised />
          </button>
          <button onClick={() => player("paper")}>
            <FaHandPaper />
          </button>
          <button onClick={() => player("scissor")}>
            <FaHandPeace />
          </button>
        </div>

        <h1>Result:
        {playerWin == "win" && <h2>You Win</h2>}
        {playerWin == "lose" && <h2>You lose</h2>}
        {playerWin == "draw" && <h2>Draw</h2>}
        </h1>
      </div>
    </div>
  );
}

export default App;
