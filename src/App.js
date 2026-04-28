import React, { useState } from "react";
import flashcards from "./flashcards";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const total = flashcards.length;
  const current = flashcards[currentIndex];
  const progress = Math.round(((currentIndex + 1) / total) * 100);

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleToggle = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="app">
      <h1 className="title">Flash Cards</h1>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
        <span className="progress-label-left">{progress}%</span>
        <span className="progress-label-right">
          {currentIndex + 1} of {total}
        </span>
      </div>

      <div className="card">
        <div className="card-body">
          {showAnswer ? (
            <p className="answer-text">{current.answer}</p>
          ) : (
            <h2 className="question-text">{current.question}</h2>
          )}
        </div>
        <div className="card-footer">
          <button className="nav-btn" onClick={handlePrev}>
            ‹ Previous
          </button>
          <button className="toggle-btn" onClick={handleToggle}>
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
          <button className="nav-btn" onClick={handleNext}>
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
