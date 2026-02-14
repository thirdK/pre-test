import React from "react";
import { getResultByScore } from "../data/results";
import "./Result.css";

const Result = ({ score, totalScore, onRestart }) => {
  const { level, message, color, recommendation } = getResultByScore(score);

  return (
    <div className="result-container">
      <div className="score-box">
        <p className="score-label">Your Score</p>
        <h1 className="score-value" style={{ color: color }}>
          {score}
        </h1>
        <p className="total-score">/ {totalScore}</p>
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
