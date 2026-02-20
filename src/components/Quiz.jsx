import React, { useState, useMemo } from "react";
import { questions as originalQuestions } from "../data/questions";
import "./Quiz.css";

// 배열을 무작위로 섞는 함수 (Fisher-Yates)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Quiz = ({ onFinish }) => {
  // 컴포넌트가 마운트될 때 질문을 한 번 섞어서 고정
  const questions = useMemo(() => shuffleArray(originalQuestions), []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswerClick = (id, group, score) => {
    const newAnswers = { ...answers, [id]: { group, score } };
    setAnswers(newAnswers);

    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      onFinish(newAnswers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

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
        <h2 className="question-text">{currentQuestion.question}</h2>
      </div>

      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() =>
              handleAnswerClick(
                currentQuestion.id,
                currentQuestion.group,
                option.score,
              )
            }
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
