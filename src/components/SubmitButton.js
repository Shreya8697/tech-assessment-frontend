import React from "react";

const SubmitButton = ({ isStarted, isSubmitted, handleSubmit, isSubmitting }) => {
  return (
    isStarted &&
    !isSubmitted && (
      <button className="submit-button" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Assessment"}
      </button>
    )
  );
};

export default SubmitButton;
