import { useState } from "react";
import React from "react";

const Tags = () => {
    const [timer , setTimer] = useState("00:00");
  function  handlework (){
    setTimer("25:00")
    let r= 24;
    let sec = 60 ;
    setInterval(() => {
        sec--;
        if (sec === -1) 
        {
         r--;
         sec = 59;    
        }
        setTimer(r + ":" + sec)

    }, 1000)


  }
    return (
        <div>
        <div className="text-white text-center">
            {timer}
        </div>
        <button onClick={() => {handlework()}} className="bg-white rounded-lg px-10">Work</button>
        <button className="bg-white ml-2 rounded-lg px-10 ">Short Break</button>
        <button className="bg-white ml-2 rounded-lg px-10">Long Break</button>
        </div>
    )
}

export default Tags;