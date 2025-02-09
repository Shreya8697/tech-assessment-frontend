import React from "react";
import './style.css';

const Feedback = ({ feedback }) => {
  return (
    <div>
      <h3 className="feedback-heading">Feedback</h3>
      <ul className="feedback-list">
        {feedback.map((msg, index) => {
          const isCorrect = msg.startsWith("✓");
          return (
            <li key={index} className={`feedback-item ${isCorrect ? "correct" : "incorrect"}`}>
              <span className="feedback-icon">{isCorrect ? "✓" : "✗"}</span>
              {msg.slice(1)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feedback;
