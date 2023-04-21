import { useState } from "react";
import React from "react";

const Tags = () => {
  const [myInterval, setMyInterval] = useState(0); 
  const [timer, setTimer] = useState();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  function handleTimer(seconds) {
    setTimer(seconds);
    setIsTimerRunning(true);
    if (timer === 0) {
        console.log("Prateeeeeeeeeeeeek");
        clearInterval(myInterval);
        return ;
    }
   let newInterval = setInterval(() => {
        seconds--;
        setTimer(seconds);
      }, 1000);
      setMyInterval(newInterval);
  }
  function time() {
    let min = parseInt(timer / 60);
    let sec = timer % 60;
    let temp = "";
    if (min < 10) {
      temp = "0" + min;
    } else {
      temp = temp + min;
    }
    temp += ":";
    if (sec < 10) {
      temp += "0" + sec;
    } else {
      temp = temp + sec;
    }
    if (isNaN(min)){
        temp= "00:00";
    }
    return temp;
  }

    function handleReset(){
        setIsTimerRunning(false);
        clearInterval(myInterval);
        setTimer(null);
    }

    function handlePause(){
        clearInterval(myInterval);
        setIsPause(true);
        if (isPause) {
            handleTimer(timer);
            setIsPause(false);
        }
    }
  return (
    <div>
      <div className="text-white text-center">
        {time()}
      </div>
      <div className="text-center mt-3">
      { isTimerRunning ? 
        (<>
    <button className="bg-white rounded-lg px-10" onClick={handlePause}>{isPause ? "Start" : "Pause"}</button>
    <button className="bg-white rounded-lg px-10 ml-3" onClick={handleReset}>Rest</button>
    </>) :
       ( <> 
    <button
          onClick={() => {
            handleTimer(1500);
          }}
          className="bg-white rounded-lg px-10"
        >
          Work
        </button>
        <button
          onClick={() => {
            handleTimer(300);
          }}
          className="bg-white ml-2 rounded-lg px-10 "
        >
          Short Break
        </button>
        <button
          onClick={() => {
            handleTimer(900);
          }}
          className="bg-white ml-2 rounded-lg px-10"
        >
          Long Break
        </button>
  </>)}
    </div>
    </div>
  );
};

export default Tags;
