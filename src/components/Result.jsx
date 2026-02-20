import React from "react";
import { getFinalResult } from "../data/results";
import "./Result.css";

const Result = ({ score: answers, totalScore, onRestart }) => {
  const { level, message, color, recommendation, scoreA, scoreB } =
    getFinalResult(answers);

  const totalObtained = scoreA + scoreB;

  return (
    <div className="result-container">
      <div className="score-box">
        <p className="score-label">Your Score</p>
        <h1 className="score-value" style={{ color: color }}>
          {totalObtained}
        </h1>
        <p className="total-score">/ {totalScore}</p>
        <div className="sub-scores">
          <span>기초: {scoreA}</span> | <span>심화: {scoreB}</span>
        </div>
      </div>

      <div className="result-message-box">
        <h2 className="level-title" style={{ color: color }}>
          {level}
        </h2>
        <p className="result-desc">{message}</p>

        <div className="recommendation-box" style={{ borderColor: color }}>
          <span className="recommendation-icon">💡</span>
          <strong>학습 추천:</strong> {recommendation}
        </div>
      </div>

      <button className="restart-button" onClick={onRestart}>
        처음으로 돌아가기
      </button>
    </div>
  );
};

export default Result;
