import React from "react";
import { getResultByScore } from "../data/results";
import "./Result.css";

const Result = ({ score, totalScore, onRestart }) => {
  // 점수에 따른 결과 데이터(메시지, 색상, 팁) 가져오기
  const { level, message, color, recommendation } = getResultByScore(score);

  return (
    <div className="result-container">
      <h2 className="result-title">디지털 역량 진단 결과</h2>

      {/* 1. 점수 표시 영역 (가장 중요) */}
      <div className="score-box" style={{ borderColor: color }}>
        <p className="score-label">나의 점수</p>
        <h1 className="score-value" style={{ color: color }}>
          {score} <span className="total-score">/ {totalScore}</span>
        </h1>
      </div>

      {/* 2. 결과 메시지 영역 (부드러운 조언) */}
      <div className="result-message-box">
        <h3 className="level-title" style={{ color: color }}>
          {level}
        </h3>
        <p className="result-desc">{message}</p>

        {/* 3. 학습 꿀팁 (추천) */}
        <div
          className="recommendation-box"
          style={{ backgroundColor: color + "1A" }}
        >
          {/* '1A'는 투명도를 10% 정도 주는 16진수 코드입니다 */}
          <span style={{ marginRight: "8px" }}>💡</span>
          <strong>학습 꿀팁:</strong> {recommendation}
        </div>
      </div>

      <button
        className="restart-button"
        onClick={onRestart}
        style={{ backgroundColor: color }}
      >
        처음으로 돌아가기
      </button>
    </div>
  );
};

export default Result;
