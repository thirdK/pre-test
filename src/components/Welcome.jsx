import React from "react";
import "./Welcome.css";

const Welcome = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <span className="badge">사전 평가</span>
        <h1 className="title">IT 역량 진단</h1>
        <p className="description">
          성공적인 학습 여정을 위한 첫 걸음,<br />
          당신의 현재 지식 수준을 확인해보세요.
        </p>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <div className="icon">📝</div>
          <div className="text">
            <strong>10 문항</strong>
            <span>핵심 내용</span>
          </div>
        </div>
        <div className="info-card">
          <div className="icon">⏱️</div>
          <div className="text">
            <strong>제한 없음</strong>
            <span>자유 풀이</span>
          </div>
        </div>
        <div className="info-card">
          <div className="icon">📊</div>
          <div className="text">
            <strong>즉시 확인</strong>
            <span>결과 제공</span>
          </div>
        </div>
      </div>

      <button className="start-button" onClick={onStart}>
        평가 시작하기
      </button>
    </div>
  );
};

export default Welcome;
