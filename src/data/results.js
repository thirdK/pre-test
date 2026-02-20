export const resultData = [
  {
    id: "PASS_3",
    title: "합격3 : 전국형(비대면)",
    level: "Lv 4\n준비된 AI 마스터 유망주! 🏆",
    message:
      "줌(Zoom) 활용 능력과 컴퓨터 조작 실력이 아주 훌륭하십니다. 수업 진도를 따라가는 것은 물론, 배운 내용을 응용해서 멋진 결과물을 만드실 준비가 완벽하게 되어 있습니다.",
    recommendation: "지금 바로 중-상급 비대면 과정에 참여해 보세요.",
    color: "#2E7D32",
  },
  {
    id: "PASS_2",
    title: "합격2 : 단독형 (즉시)",
    level: "Lv 3\n성실한 디지털 탐험가! 🔭",
    message:
      "기본적인 PC 활용 능력이 아주 훌륭하십니다! 대면 수업에서 강사님의 안내를 따라가기에 충분한 실력을 갖추고 계시네요.",
    recommendation: "대면 과정에 바로 합류하세요.",
    color: "#4CAF50",
  },
  {
    id: "PASS_1",
    title: "합격1 : 단독형 (준비 필요)",
    level: "Lv 2\n열정 가득한 새싹! 🌱",
    message:
      "새로운 기술을 배우려는 의지가 정말 멋지십니다! 컴퓨터 사용은 익숙하시지만, 수업에 필요한 계정 로그인이나 가입 절차에서 조금의 도움이 필요할 수 있습니다. 개강 전 미리 환경을 점검해두면 수업이 훨씬 즐거워질 거예요.",
    recommendation:
      "수업에 필요한 계정 등을 미리 준비하신 후 대면 과정에 도전하세요.",
    color: "#FF9800",
  },
  {
    id: "FAIL",
    title: "불합격 : 리터러시 역량 필요",
    level: "Lv 1\n디지털 세상의 첫걸음! 🚀",
    message:
      "AI라는 거대한 세상에 첫 발을 내딛으셨군요! 큰 건물을 짓기 위해 기초 공사가 중요하듯, AI를 자유자재로 다루기 위해 PC와 조금 더 친해지는 시간이 필요합니다. 기본기를 다지는 과정부터 즐겁게 시작해 보시는 건 어떨까요?",
    recommendation: "아쉽지만 컴퓨터와 친해지는 시간이 필요해요.",
    color: "#F44336",
  },
];

// 판정 기준 점수 상수화
const SCORE_THRESHOLD = {
  MIN_PASS: 40,
  EXPERT: 70,
};

/**
 * 답변 객체를 받아 그룹별 점수를 계산하고 최종 결과 데이터를 반환
 *
 * @param {Object} answers - 사용자가 선택한 답변 데이터 객체
 * @param {Object} answers.id - 문항 ID (Key)
 * @param {number} answers.id.group - 해당 문항의 그룹 번호 (1: 기초, 2: 심화)
 * @param {number} answers.id.score - 사용자가 선택한 답변의 점수
 * @example {"1":{group:1, score:10}}, "2":{group:1, score:5}, ...}
 * @returns {Object} 최종 판정 결과 및 점수
 */
export const getFinalResult = (answers) => {
  // 답변 데이터가 없는 경우
  if (!answers || Object.keys(answers).length === 0) {
    return { ...resultData.find((r) => r.id === "FAIL"), scoreA: 0, scoreB: 0 };
  }

  // 점수 합산 (그룹별)
  const totals = Object.values(answers).reduce(
    (acc, curr) => {
      if (curr.group === 1) acc.groupA += curr.score;
      else acc.groupB += curr.score;
      return acc;
    },
    { groupA: 0, groupB: 0 },
  );

  const { groupA: scoreA, groupB: scoreB } = totals;

  // 판정 로직
  let resultId;

  if (scoreA < SCORE_THRESHOLD.MIN_PASS) {
    resultId = "FAIL";
  } else if (
    scoreA >= SCORE_THRESHOLD.EXPERT &&
    scoreB >= SCORE_THRESHOLD.EXPERT
  ) {
    resultId = "PASS_3";
  } else if (scoreA >= SCORE_THRESHOLD.EXPERT) {
    resultId = "PASS_2";
  } else {
    resultId = "PASS_1";
  }

  // 결과 데이터를 없을 경우 마지막 항목(FAIL)을 반환하거나 undefined 처리?
  const result =
    resultData.find((r) => r.id === resultId) ||
    resultData[resultData.length - 1];

  // 최종 결과 정보와 함께 실제 점수도 같이 넘김 (UI 활용 용도)
  return {
    ...result,
    scoreA,
    scoreB,
  };
};
