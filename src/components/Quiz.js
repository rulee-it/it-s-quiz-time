import React, { useState } from "react";
import questions from "../questions";

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    const next = currentQ + 1;
    if (next < questions.length) {
      setCurrentQ(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div>
        <h2>Quiz Complete!</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <button onClick={restartQuiz}>Play Again</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>{questions[currentQ].question}</h2>
      {questions[currentQ].options.map((opt, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
