import React, { useState, useEffect } from "react";
import "./style.css";

export  const TimerAssessment2 = () => {
  //const [input, setInput] = useState("");
  const [timer, setTimer] = useState(15);
  const [status, setStatus] = useState("stopped");
  const [specificNumber, setSpecificNumber] = useState("");
  const [result, setResult] = useState(null);
  const num = 4379;
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const num1 = getRndInteger(10000,1);
  useEffect(() => {
    const countdown = () => {
      if (timer === 0) {
        setStatus("stopped");
        setTimer(15)
        // setInput("");
        setResult("failed");
        alert(`Timer of ${input} seconds completed. You failed!`);
      } else {
        setTimer(timer - 1);
      }
    };

    let timeoutId;

    if (status === "running") {
      timeoutId = setTimeout(countdown, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [timer, status]); // timer, status, and input as dependencies

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const number = parseInt(value);

  //   if (!isNaN(number)) {
  //     setInput(number);
  //     setTimer(number);
  //     setResult(null); // Reset result on input change
  //   } else {
  //     setInput("");
  //     setTimer(0);
  //   }
  // };

  const handleStart = () => {
    if(timer===0){
    setTimer(15)
    }
    setStatus("running");
    alert(`${num1}`)
  };

  const handlePause = () => {
    if (specificNumber === num1) {
      setStatus("paused");
      setTimer(0)
    } else {
      alert("Enter correct number to pause.");
    }
  };

  const handleReset = () => {
    //setInput("");
    setTimer(0);
    setStatus("stopped");
    setSpecificNumber("");
    setResult(null);
  };

  const handleSpecificNumberChange = (e) => {
    const value = e.target.value;
    const number = parseInt(value);
    if (!isNaN(number)) {
      setSpecificNumber(number); // Reset result on input change
    } else {
      setSpecificNumber("");
      alert("Enter correct number");
    }
  };

  const handleSpecificNumberSubmit = () => {
    if (status === "running") {
      alert("Pause the timer before entering the specific number.");
    } else {
      if (specificNumber === num1) {
        setResult("success");
        alert(`Congratulations! You successfully stopped the timer at ${specificNumber} seconds.`);
        setStatus("stopped");
        setTimer(0)
        //setInput("");
      } else {
        setResult("failed");
        alert(`Incorrect number. You failed!`);
      }
    }
  };

  return (
    <div className="box">
      <h1>Timer</h1>
      {/* <input type="text" value={input} onChange={handleChange} /> */}
      {status === "running" && (
        <div>
          <input
            type="text"
            placeholder="Enter specific number"
            value={specificNumber}
            onChange={handleSpecificNumberChange}
          />
          {/* <button onClick={handleSpecificNumberSubmit}></button> */}
        </div>
      )}
      <div className="button">
        {status === "running" ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="display">
        <h2>{timer}</h2>
        {result && <p>{result === "success" ? "Success!" : "Failed!"}</p>}
      </div>
    </div>
  );
};
