import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const toggleCounter = () => {
    if (isRunning) {
      clearInterval(intervalId);
    } else {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  };

  const resetCounter = () => {
    clearInterval(intervalId);
    setCount(0);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter Application</h1>
      <p style={{ fontSize: "48px" }}>{count}</p>
      <button
        onClick={toggleCounter}
        style={{ padding: "10px 20px", margin: "10px", cursor: "pointer" }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        onClick={resetCounter}
        style={{ padding: "10px 20px", margin: "10px", cursor: "pointer" }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
