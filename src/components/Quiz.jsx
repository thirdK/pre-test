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

// 선택지 번호 뱃지
const OPTION_LABELS = ["A", "B", "C", "D"];

// 카테고리별 이모지
const CATEGORY_ICON = {
  "생활": "📱",
  "PC활용": "💻",
  "수업준비": "📚",
  "AI경험": "🤖",
};

const Quiz = ({ onFinish }) => {
  const questions = useMemo(() => shuffleArray(originalQuestions), []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isExiting, setIsExiting] = useState(false);
  const [pressedIndex, setPressedIndex] = useState(null);
  const [blocked, setBlocked] = useState(false);

  const handleAnswerSelect = (id, group, score) => {
    if (blocked) return;

    const newAnswers = { ...answers, [id]: { group, score } };
    setAnswers(newAnswers);
    const nextQuestion = currentQuestionIndex + 1;

    setBlocked(true);
    setIsExiting(true);
    setPressedIndex(null);

    setTimeout(() => {
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
        setIsExiting(false);
        setTimeout(() => setBlocked(false), 350);
      } else {
        onFinish(newAnswers);
      }
    }, 220);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  // 두 자리 숫자 포맷
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="quiz-container">
      {/* 배경 글로우 오브 */}
      <div className="quiz-orb quiz-orb--1" aria-hidden="true" />
      <div className="quiz-orb quiz-orb--2" aria-hidden="true" />

      {/* 회전하는 골드 별 장식 */}
      <span className="spin-star spin-star--1" aria-hidden="true">★</span>
      <span className="spin-star spin-star--2" aria-hidden="true">✦</span>
      <span className="spin-star spin-star--3" aria-hidden="true">★</span>

      {/* 카테고리 배지: 우상단 */}
      <div className="category-badge">
        <span>{CATEGORY_ICON[currentQuestion.category] ?? "📋"}</span>
        <span>{currentQuestion.category}</span>
      </div>

      {/* 진행 헤더 */}
      <div className="progress-header">
        <div className="progress-info">
          <span className="progress-current">
            Q.<strong>{pad(currentQuestionIndex + 1)}</strong>
          </span>
          <span className="progress-total">/ {pad(questions.length)}</span>
        </div>
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* 질문 + 선택지: 전환 애니메이션 래퍼 */}
      <div className={`quiz-content ${isExiting ? 'quiz-content--exit' : 'quiz-content--enter'}`}>
        {/* 질문 */}
        <div className="question-section">
          <h2 className="question-text">{currentQuestion.question}</h2>
        </div>

        {/* 선택지 */}
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <div
              key={`${currentQuestion.id}-${index}`}
              role="button"
              tabIndex={blocked ? -1 : 0}
              className={`option-button${pressedIndex === index ? ' option-button--pressed' : ''}`}
              onTouchStart={() => !blocked && setPressedIndex(index)}
              onTouchEnd={(e) => {
                e.preventDefault();
                if (blocked) return;
                setPressedIndex(null);
                handleAnswerSelect(currentQuestion.id, currentQuestion.group, option.score);
              }}
              onTouchCancel={() => setPressedIndex(null)}
              onMouseDown={() => !blocked && setPressedIndex(index)}
              onMouseUp={() => {
                if (blocked) return;
                setPressedIndex(null);
                handleAnswerSelect(currentQuestion.id, currentQuestion.group, option.score);
              }}
              onMouseLeave={() => setPressedIndex(null)}
            >
              <span className="option-label">{OPTION_LABELS[index]}</span>
              <span className="option-text">{option.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
