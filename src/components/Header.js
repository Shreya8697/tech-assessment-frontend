
//thats header file
import React from "react";
import Timer from "./Timer";
import './style.css';

const Header = ({ timer, score, isSubmitted, getBadge }) => {
  return (
    <div className="fixed-header">
      <div className="flex-container">
        <Timer timer={timer} />
        {isSubmitted && (
          <div className="flex-container">
            <span className={`font-semibold ${getBadge(score).color}`}>
              {getBadge(score).title}
            </span>
            <span className="score">
              Score: <span className="font-bold">{score}/20</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
