import React, { useState } from "react";
import { questions } from "../data/questions";
import "./Quiz.css";

const Quiz = ({ onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedScore) => {
    const newScore = score + selectedScore;
    setScore(newScore);

    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      onFinish(newScore);
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="progress-header">
        <div className="progress-info">
          <span>Question {currentQuestionIndex + 1}</span>
          <span>{questions.length}</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="question-section">
        <h2 className="question-text">
          {questions[currentQuestionIndex].question}
        </h2>
      </div>

      <div className="options-container">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswerClick(option.score)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
