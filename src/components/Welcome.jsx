import React from "react";
import "./Welcome.css";
import { questions } from "../data/questions";

const Welcome = ({ onStart }) => {
  return (
    <div className="welcome-container">
      {/* 배경 글로우 오브 */}
      <div className="deco-circle deco-circle--1" />
      <div className="deco-circle deco-circle--2" />
      <div className="deco-circle deco-circle--3" />

      {/* 별 파티클 */}
      <div className="stars-container" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} className={`star star--${i + 1}`} />
        ))}
      </div>

      {/* 히어로 섹션 */}
      <div className="welcome-hero">
        <span className="badge">★ QUICK TEST</span>
        <h1 className="title">
          내 IT 실력,<br/>얼마나 될까? <span className="title-emoji">🤔</span>
        </h1>
        <p className="description">
          딱 몇 분이면 돼요!<br />
          나에게 딱 맞는 강의가 뭔지 찾아봐요 😊
        </p>
      </div>

      {/* 정보 카드 */}
      <div className="info-cards">
        <div className="info-card">
          <div className="icon">📝</div>
          <div className="card-text-group">
            <div className="card-value">{questions.length}</div>
            <div className="card-label">문항</div>
          </div>
        </div>
        <div className="info-card">
          <div className="icon">⏱️</div>
          <div className="card-text-group">
            <div className="card-value">∞</div>
            <div className="card-label">제한 없음</div>
          </div>
        </div>
        <div className="info-card">
          <div className="icon">📊</div>
          <div className="card-text-group">
            <div className="card-value">즉시</div>
            <div className="card-label">결과 확인</div>
          </div>
        </div>
      </div>

      {/* CTA 버튼 */}
      <div className="cta-area">
        <button className="start-button" onClick={onStart}>
          ▶ 테스트 시작!
        </button>
      </div>
    </div>
  );
};

export default Welcome;
