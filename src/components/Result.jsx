import React, { useState, useEffect } from "react";
import { getFinalResult } from "../data/results";
import "./Result.css";
import charLv1 from "../assets/char_lv1.png";
import charLv2 from "../assets/char_lv2.png";
import charLv3 from "../assets/char_lv3.png";
import charLv4 from "../assets/char_lv4.png";

// 레벨별 캐릭터 이미지 매핑
const CHARACTER_MAP = {
  FAIL:   charLv1,
  PASS_1: charLv2,
  PASS_2: charLv3,
  PASS_3: charLv4,
};

// 점수 카운트업 훅
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target === 0) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

const Result = ({ score: answers, totalScore, onRestart }) => {
  const { level, message, color, recommendation, scoreA, scoreB } =
    getFinalResult(answers);

  const totalObtained = scoreA + scoreB;
  const displayScore = useCountUp(totalObtained);

  // level 줄바꿈 분리
  const [levelLine1, levelLine2] = level.split("\n");

  return (
    <div className="result-container">
      {/* 배경 글로우 오브 */}
      <div className="result-orb result-orb--1" aria-hidden="true" />
      <div className="result-orb result-orb--2" aria-hidden="true" />

      {/* 회전 별 장식 */}
      <span className="result-spin-star result-spin-star--1" aria-hidden="true">★</span>
      <span className="result-spin-star result-spin-star--2" aria-hidden="true">✦</span>
      <span className="result-spin-star result-spin-star--3" aria-hidden="true">★</span>

      {/* 점수 박스 */}
      <div className="score-box">
        <p className="score-label">YOUR SCORE</p>
        <h1 className="score-value" style={{ color }}>
          {displayScore}
        </h1>
        <p className="total-score">/ {totalScore}</p>
        <div className="sub-scores">
          <span>기초: {scoreA}</span>
          <span>심화: {scoreB}</span>
        </div>
      </div>

      {/* 레벨 박스 */}
      <div className="level-box" style={{ borderColor: color, boxShadow: `0 0 24px ${color}33` }}>
        <p className="level-line1" style={{ color }}>{levelLine1}</p>
        <h2 className="level-title">{levelLine2}</h2>
        <p className="result-desc">{message}</p>
      </div>

      {/* 추천 박스 */}
      <div className="recommendation-box">
        <div className="recommendation-header">
          <span className="recommendation-icon">💡</span>
          <strong>학습 추천:</strong>
        </div>
        <p className="recommendation-text">{recommendation?.title}</p>
        
        {recommendation?.tasks && recommendation.tasks.length > 0 && (
          <ul className="recommendation-list">
            {recommendation.tasks.map((task, index) => (
              <li key={index} className="recommendation-item">
                <span className="task-bullet" style={{ color }}>✔</span>
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 재시작 버튼 */}
      <button className="restart-button" onClick={onRestart}>
        처음으로 돌아가기
      </button>
    </div>
  );
};

export default Result;
