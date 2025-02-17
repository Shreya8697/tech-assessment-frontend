//this button works only
//when user clicks on the button of start
import React from "react";

const StartButton = ({ isStarted, setIsStarted }) => {
  return (
    <button className="start-button" onClick={() => setIsStarted(true)} disabled={isStarted}>
      {isStarted ? "Assessment Started" : "Start Assessment"}
    </button>
  );
};

export default StartButton;
