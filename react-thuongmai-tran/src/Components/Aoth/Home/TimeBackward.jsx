import React, { useState, useEffect } from 'react';

const TimeBackward = () => {
  const initialTime = 12 * 60 * 60; 
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalId);
          
          return 0;
        }
      });
    }, 1000); 

    
    return () => clearInterval(intervalId);
  }, []); 

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
      <div className="countdown-container">
        <div className="hour">{hours.toString().padStart(2, '0')}</div>
        <div className="separator">:</div>
        <div className="minute">{minutes.toString().padStart(2, '0')}</div>
        <div className="separator">:</div>
        <div className="second">{seconds.toString().padStart(2, '0')}</div>
      </div>
    );
  };

  return formatTime(remainingTime);
};

export default TimeBackward;
