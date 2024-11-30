// CountdownTimer.js
import React, { useState, useEffect } from 'react';
import './Countdown.css';
const Countdown = ({ initialTime }) => {
  const validInitialTime = typeof initialTime === 'number' && initialTime > 0 ? initialTime : 0;
  const [time, setTime] = useState(validInitialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerId);
  }, [isRunning, time]);

  const handleStartStop = () => {
    if (time > 0) {
      setIsRunning((prevIsRunning) => !prevIsRunning);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '00:00 ';

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
     <div className="countdown-container">
     <h1 className="countdown-title">Countdown Timer</h1>
     <p className="countdown-time">{formatTime(time)}</p>
     <button className="countdown-button" onClick={handleStartStop}>
       {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Countdown;
