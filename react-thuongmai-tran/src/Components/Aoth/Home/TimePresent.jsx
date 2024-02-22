import React, { useState, useEffect } from 'react';

const TimePresent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <div className="time-container">
      <p className="time-part" id="hours">{hours}</p>
      <span className="time-divider">:</span>
      <p className="time-part" id="minutes">{minutes}</p>
      <span className="time-divider">:</span>
      <p className="time-part" id="seconds">{seconds}</p>
    </div>
  );
}

export default TimePresent;
