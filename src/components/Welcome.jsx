import React from "react";
import "./Welcome.css";

const Welcome = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <h1 className="title">사전 역량 평가</h1>
      <p className="description">
        안녕하세요! 본 평가는 학습 과정을 시작하기 전, <br /> 기본적인 IT 지식을
        확인하기 위한 사전 평가입니다.
      </p>
      <ul className="info-list">
        <li>
          <strong>문항 수 : </strong> 총 10문제
        </li>
        <li>
          <strong>제한 시간 : </strong>없음
        </li>
        <li>
          <strong>결과 : </strong>평가 종료 후 즉시 확인 가능
        </li>
      </ul>
      <button className="start-button" onClick={onStart}>
        평가 시작하기
      </button>
    </div>
  );
};

export default Welcome;
