import React, { useState } from "react";
import "./App.css";
import { FaHandPaper } from "react-icons/fa";
import { FaFistRaised } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";

function App() {
  function player(action) {
    if (action === "rock") {
      setChoice(<FaFistRaised size={70} />);
    } else if (action === "paper") {
      setChoice(<FaHandPaper size={70} />);
    } else {
      setChoice(<FaHandPeace size={70} />);
    }
  }
  // const Computer = () => {};
  const [score, setScore] = useState("0");
  const [choice, setChoice] = useState("");
  const [computchoice, setComputechoice] = useState("");
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
            <div>{computchoice}</div>
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
        <h1>Player Wins</h1>
      </div>
    </div>
  );
}

export default App;
