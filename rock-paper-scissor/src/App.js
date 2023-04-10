import React, { useState, useEffect } from "react";
// import "./App.css";
import { FaHandPaper } from "react-icons/fa";
import { FaFistRaised } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";

function App() {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [winner, setWinner] = useState("");

  function handleUserInput(userChoice) {
    setUserChoice(userChoice);
    handleComputerInput();
  }

  function handleComputerInput() {
    setComputerChoice(Math.floor(Math.random() * 3));
  }
   
  useEffect(()=>{
    compareInputs();
  }, [computerChoice]);

  function compareInputs() {
    if (
      (userChoice === 0 && computerChoice === 1) ||
      (userChoice === 1 && computerChoice === 2) ||
      (userChoice === 2 && computerChoice === 0)
    ) {
      setWinner("User Won");
    }
    else if(
      userChoice === computerChoice
    ){
      setWinner("Draw");
    }
    else {
      setWinner("Prateek Won");
    }
  }

  return (
    <div>
     {userChoice !=undefined && winner}
      <button onClick={() => handleUserInput(0)}>
        <FaHandPaper />
      </button>
      <button onClick={() => handleUserInput(1)}>
        <FaFistRaised />
      </button>
      <button onClick={() => handleUserInput(2)}>
        <FaHandPeace />
      </button>
    </div>
  );
}

export default App;
