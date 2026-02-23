export const resultData = [
  {
    id: "PASS_3",
    title: "합격3 : 전국형(비대면)",
    level: "Lv 4\n준비된 AI 마스터 유망주! 🏆",
    message:
      "컴퓨터 활용 능력이 아주 훌륭하십니다! 복잡한 툴도 척척 다루는 놀라운 적응력을 가졌군요. 단순히 배우는 것에 그치지 않고, AI를 도구 삼아 나만의 창의적인 결과물을 만들어낼 준비가 완벽하게 끝났습니다. 공간의 제약 없이 온라인 세상을 무대로 마음껏 활약할 수 있는 준비가 완벽하게 되어 있습니다.",
    recommendation: {
      title: "더 넓은 세상을 만날 수 있는 중-상급 비대면 과정에 도전해보세요.",
      tasks: [
        "생성형 AI(ChatGPT 등)를 활용한 고급 프롬프트 엔지니어링 익히기",
        "다양한 AI 툴을 결합하여 나만의 콘텐츠(이미지, 영상) 제작해보기",
      ],
    },
    color: "#4ADE80",
  },
  {
    id: "PASS_2",
    title: "합격2 : 단독형 (즉시)",
    level: "Lv 3\n성실한 디지털 탐험가! 🔭",
    message:
      "이론과 실무의 완벽한 조화! 강사님의 가이드를 스펀지처럼 흡수할 수 있는 탄탄한 기본기를 갖추셨네요. 새로운 도구에 대한 두려움보다 호기심이 더 큰 당신은, 대면 수업에서 동료들과 소통하며 실전 근력을 키울 때 가장 빛나는 타입입니다.",
    recommendation: {
      title: "생생한 현장감이 넘치는 대면 과정에 바로 합류해보세요.",
      tasks: [
        "기본적인 문서 작성 도구(PPT, 엑셀) 활용 능력 점검하기",
        "인터넷 정보 검색 및 자료 수집 능력 키우기",
        "클라우드 서비스(Google Drive 등) 활용해보기",
      ],
    },
    color: "#22D3EE",
  },
  {
    id: "PASS_1",
    title: "합격1 : 단독형 (준비 필요)",
    level: "Lv 2\n열정 가득한 새싹! 🌱",
    message:
      "잠재력이 폭발하기 직전의 뜨거운 열정을 가지셨군요! 컴퓨터 활용이 익숙하신 만큼, 로그인이나 계정 가입 같은 몇 가지 매듭만 풀면 누구보다 빠르게 성장할 타입입니다. 시작이 반이라는 말처럼, 약간의 준비만 마친다면 AI라는 멋진 날개를 달고 비상할 준비가 되어 있습니다.",
    recommendation: {
      title: "준비물을 챙겨 즐거운 대면 수업에서 함께 시작해볼까요?",
      tasks: [
        "한글 타자 100타 이상 (숫자키/특수문자 사용 확인 필수)",
        "구글 계정 로그인 (계정이 없다면 미리 가입하기)",
        "기본 단축키(Ctrl+C, Ctrl+V) 숙지하기",
        "파일 다운로드 후 바탕화면으로 꺼내보기",
      ],
    },
    color: "#FF9800",
  },
  {
    id: "FAIL",
    title: "불합격 : 리터러시 역량 필요",
    level: "Lv 1\n디지털 세상의 첫걸음! 🚀",
    message:
      "무궁무진한 AI 세상에 첫 발을 내딛으신 순수한 탐험가이시군요! 큰 건물을 짓기 위해 땅을 단단히 다지는 시간이 필요하듯, 지금은 PC라는 기초 체력을 기르는 소중한 단계입니다. 조급해하지 않고 하나씩 익혀나가다 보면, 머지않아 디지털 세상이 당신의 가장 친한 친구가 될 것입니다.",
    recommendation: {
      title:
        "차근차근 실력을 쌓으면서 컴퓨터와 친해지는 시간이 필요해요. 아래 내용을 확인 후 천천히 연습해보세요.",
      tasks: [
        "컴퓨터 전원 켜고 끄기(On/Off) 익히기",
        "한글 타자 100타 이상 (숫자키/특수문자 사용 확인 필수)",
        "구글 계정 로그인 및 가입 시도해보기",
        "파일 다운로드 후 바탕화면으로 꺼내보기",
        "기본 단축키(Ctrl+C, Ctrl+V) 숙지하기",
      ],
    },
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
