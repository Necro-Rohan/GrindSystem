import React, { useState } from "react";
import "../styles/Feedback.css";
import { CircleX } from "lucide-react";

const Feedback = ({handleClose}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false); 
    }, 2000); 
  };


  return (
    <div className="feedback-wrapper">
      <div className="feedback-card">
        <button className="close-btn" onClick={handleClose}>
          <CircleX />
        </button>
        <div className="feedback-header">
          <h2>GrindSystem Feedback</h2>
          <p>
            Share your thoughts to help us improve your experience with
            GrindSystem.
          </p>
        </div>

        <div className="feedback-form">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <label>
                Provide your feedback here: <span>*</span>
              </label>
              <textarea
                required
                placeholder="Your thoughts..."
              />
              <button type="submit">
                {submitted ? "Submitted!" : "Submit"}
              </button>
            </form>
          ) : (
            <div className="success-message">Thank you for your feedback!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
