import React from "react";
import './style.css';

const MCQSection = ({ mcqQuestions, answers, setAnswers, isStarted, isSubmitted }) => {
  return (
    <div className="mcq-section">
      <h3 className="section-title">Multiple Choice Questions</h3>
      {mcqQuestions.map((q) => (
        <div key={q.id} className="mcq-question">
          <p className="question-text">{q.question}</p>
          <div className="options-container">
            {q.options.map((option) => (
              <label key={option.value} className="option-label">
                <input
                  type="radio"
                  name={q.id}
                  value={option.value}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [q.id]: e.target.value,
                    }))
                  }
                  disabled={!isStarted || isSubmitted}
                  className="radio-input"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MCQSection;
