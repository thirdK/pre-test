import React, { useState } from "react";
import { questions } from "../data/questions";
import "./Quiz.css";

const Quiz = ({ onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedScore) => {
    // 인자가 index에서 score로 변경됨

    // 1. 점수 누적 (선택한 보기의 점수를 더함)
    const newScore = score + selectedScore;
    setScore(newScore);

    // 2. 다음 문제로 이동
    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      // 마지막 문제면 최종 점수 전달
      onFinish(newScore);
    }
  };

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <span>Question{currentQuestionIndex + 1}</span> / {questions.length}
      </div>

      <h2 className="question-text">
        {questions[currentQuestionIndex].question}
      </h2>

      <div className="options-container">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            // 클릭 시 해당 옵션의 점수(option.score)를 넘겨줌
            onClick={() => handleAnswerClick(option.score)}
          >
            {/* 이제 option이 객체이므로 option.text로 글자를 보여줌 */}
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
