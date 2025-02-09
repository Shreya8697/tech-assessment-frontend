import React from "react";

const Timer = ({ timer }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center">
      <span className="text-lg font-semibold mr-2">Total Time:</span>
      <span className="timer text-xl font-bold">{formatTime(timer)}</span>
    </div>
  );
};

export default Timer;
