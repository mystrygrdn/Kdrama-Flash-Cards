import react from "react";

function FlashCard({ card, showAnswer, onToggle }) {
  return (
    <div className="card">
      <div className="card-body">
        {showAnswer ? (
          <p className="answer-text">{card.answer}</p>
        ) : (
          <h2 className="question-text">{card.question}</h2>
        )}
      </div>
      <div className="card-footer">
        <button className="nav-btn" onClick={null} disabled>
          {" "}
          Previous{" "}
        </button>
        <button className="toggle-btn" onClick={onToggle}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <button className="nav-btn" onClick={null} disabled>
          Next
        </button>
      </div>
    </div>
  );
}

export default FlashCard;
