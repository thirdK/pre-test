export const questions = [
  // -----------------------------------------------------------
  // [PART 1] 생활 (디지털 문해력) - Group 1
  // -----------------------------------------------------------
  {
    id: 1,
    group: 1,
    category: "생활",
    question:
      "소리가 안 들리거나 멈췄을 때 스피커 점검이나 재접속 등을 할 수 있습니까?",
    options: [
      { text: "네, 스스로 해결 가능합니다.", score: 10 },
      { text: "어디를 누를지 몰라 당황합니다.", score: 5 },
      { text: "전혀 모릅니다.", score: 0 },
    ],
  },
  {
    id: 2,
    group: 1,
    category: "생활",
    question: "PC 카카오톡으로 파일을 받아 컴퓨터에 저장할 수 있습니까?",
    options: [
      { text: "네, 원활하게 가능합니다.", score: 10 },
      { text: "로그인은 되나 저장은 모릅니다.", score: 5 },
      { text: "할 줄 모릅니다.", score: 0 },
    ],
  },
  {
    id: 3,
    group: 1,
    category: "생활",
    question: "네이버 카페, 다음 카페를 가입하고 활용할 수 있습니까?",
    options: [
      {
        text: "네, 카페에 가입하고 질문 글을 올리거나 댓글을 자유롭게 쓸 수 있습니다.",
        score: 10,
      },
      {
        text: "카페에 들어가서 남이 쓴 글을 읽을 수는 있지만, 가입이나 글쓰기는 어렵습니다.",
        score: 5,
      },
      {
        text: "네이버 카페가 무엇인지 모르거나, 사용해 본 적이 전혀 없습니다.",
        score: 0,
      },
    ],
  },
  {
    id: 4,
    group: 1,
    category: "생활",
    question: "음식점 키오스크(무인 주문기)를 혼자서 이용할 수 있습니까?",
    options: [
      { text: "네, 큰 어려움 없이 가능합니다.", score: 10 },
      { text: "사람이 있으면 긴장되고 어렵습니다.", score: 5 },
      { text: "사용하지 못합니다.", score: 0 },
    ],
  },
  {
    id: 5,
    group: 1,
    category: "생활",
    question: "스마트폰 계좌 이체나 간편 결제(삼성페이 등)를 사용합니까?",
    options: [
      { text: "네, 능숙하게 사용합니다.", score: 10 },
      { text: "잔액 확인만 할 줄 압니다.", score: 5 },
      { text: "은행에 직접 방문합니다.", score: 0 },
    ],
  },

  // -----------------------------------------------------------
  // [PART 2] PC활용 (실습 속도 결정) - Group 1
  // -----------------------------------------------------------
  {
    id: 6,
    group: 1,
    category: "PC활용",
    question: "키보드를 보지 않고 짧은 문장을 원활하게 입력할 수 있습니까?",
    options: [
      { text: "네, 큰 어려움 없이 가능합니다.", score: 10 },
      { text: "자판을 보며 천천히 입력합니다.", score: 5 },
      { text: "입력이 어렵거나 불가능합니다.", score: 0 },
    ],
  },
  {
    id: 7,
    group: 1,
    category: "PC활용",
    question: "화면에 인터넷 창 두 개를 동시에 띄워놓고 보면서 할 수 있습니까?",
    options: [
      { text: "네, 창 크기 조절이 가능합니다.", score: 10 },
      { text: "창을 겹쳐 놓고 번갈아 봅니다.", score: 5 },
      { text: "조절 방법을 모릅니다.", score: 0 },
    ],
  },
  {
    id: 8,
    group: 1,
    category: "PC활용",
    question:
      "문장을 드래그하여 복사(Ctrl+C) 및 붙여넣기(Ctrl+V) 할 수 있습니까?",
    options: [
      { text: "네, 단축키로 빠르게 가능합니다.", score: 10 },
      { text: "우클릭 메뉴로 천천히 가능합니다.", score: 5 },
      { text: "방법을 모릅니다.", score: 0 },
    ],
  },
  {
    id: 9,
    group: 1,
    category: "PC활용",
    question:
      "사진 파일을 찾아 채팅창이나 웹사이트에 드래그로 올릴 수 있습니까?",
    options: [
      { text: "네, 파일 업로드가 쉽습니다.", score: 10 },
      { text: "찾는 데 시간이 좀 걸립니다.", score: 5 },
      { text: "할 줄 모릅니다.", score: 0 },
    ],
  },
  {
    id: 10,
    group: 1,
    category: "PC활용",
    question: "다운로드한 이미지를 '새 폴더'를 만들어 정리할 수 있습니까?",
    options: [
      { text: "네, 폴더 생성 및 정리가 가능합니다.", score: 10 },
      { text: "바탕화면에만 저장 가능합니다.", score: 5 },
      { text: "파일 위치를 못 찾습니다.", score: 0 },
    ],
  },

  // -----------------------------------------------------------
  // [PART 3] 수업준비 (Zoom & 계정) - Group 2
  // -----------------------------------------------------------
  {
    id: 11,
    group: 2,
    category: "수업준비",
    question:
      "현재 비밀번호를 알고 로그인 가능한 본인 명의 구글 계정이 있습니까?",
    options: [
      { text: "네, 정확히 알고 있습니다.", score: 10 },
      { text: "계정은 있지만 비번을 모릅니다.", score: 5 },
      { text: "아니요, 계정이 없습니다.", score: 0 },
    ],
  },
  {
    id: 12,
    group: 2,
    category: "수업준비",
    question:
      "Zoom을 사용하여 비대면 화상 회의나 수업에 참여해 본 적이 있습니까?",
    options: [
      { text: "네, 자주 사용하며 익숙합니다.", score: 10 },
      { text: "참여해 봤지만 어렵습니다.", score: 5 },
      { text: "아니요, 한 번도 안 해봤습니다.", score: 0 },
    ],
  },
  {
    id: 13,
    group: 2,
    category: "수업준비",
    question: "Zoom 화면과 인터넷 창(크롬 등)을 자유롭게 전환할 수 있습니까?",
    options: [
      { text: "네, 자유롭게 바꿀 수 있습니다.", score: 10 },
      { text: "할 수 있지만 자주 헷갈립니다.", score: 5 },
      { text: "전혀 못하거나 당황합니다.", score: 0 },
    ],
  },
  {
    id: 14,
    group: 2,
    category: "수업준비",
    question:
      "강사의 요청 시 Zoom '화면 공유'를 통해 내 화면을 보여줄 수 있습니까?",
    options: [
      { text: "네, 즉시 공유할 수 있습니다.", score: 10 },
      { text: "메뉴 찾는 데 시간이 걸립니다.", score: 5 },
      { text: "전혀 못합니다.", score: 0 },
    ],
  },
  {
    id: 15,
    group: 2,
    category: "수업준비",
    question:
      "도움 없이 스스로 웹사이트(네이버, 구글, ChatGPT 등)에 회원가입 할 수 있습니까?",
    options: [
      { text: "네, 휴대폰 인증까지 가능합니다.", score: 10 },
      { text: "누가 도와주면 할 수 있습니다.", score: 5 },
      { text: "혼자서는 어렵습니다.", score: 0 },
    ],
  },

  // -----------------------------------------------------------
  // [PART 4] AI경험 (교육 수준 진단) - Group 2
  // -----------------------------------------------------------
  {
    id: 16,
    group: 2,
    category: "AI경험",
    question: "네이버 검색과 ChatGPT의 차이를 알고 다르게 질문할 수 있습니까?",
    options: [
      { text: "차이를 알고 일을 시킬 수 있습니다.", score: 10 },
      { text: "들어봤지만 단어만 입력합니다.", score: 5 },
      { text: "차이점을 잘 모릅니다.", score: 0 },
    ],
  },
  {
    id: 17,
    group: 2,
    category: "AI경험",
    question:
      "ChatGPT, Gemini 같은 AI 서비스에 가입하고 사용해 본 적이 있습니까?",
    options: [
      { text: "네, 자주 사용합니다.", score: 10 },
      { text: "한두 번 써본 적 있습니다.", score: 5 },
      { text: "없습니다.", score: 0 },
    ],
  },
  {
    id: 18,
    group: 2,
    category: "AI경험",
    question: "AI에게 '그림을 그려줘'라고 요청해서 이미지를 만들어 봤습니까?",
    options: [
      { text: "네, 다양한 그림을 그려봤습니다.", score: 10 },
      { text: "시도했으나 원하는 대로 안 나옴.", score: 5 },
      { text: "없습니다.", score: 0 },
    ],
  },
  {
    id: 19,
    group: 2,
    category: "AI경험",
    question:
      "AI 결과가 맘에 안 들 때 '다시 고쳐줘'라고 구체적으로 요청합니까?",
    options: [
      { text: "네, 결과가 나올 때까지 대화합니다.", score: 10 },
      { text: "한 번 질문하고 끝냅니다.", score: 5 },
      { text: "해본 적 없습니다.", score: 0 },
    ],
  },
  {
    id: 20,
    group: 2,
    category: "AI경험",
    question:
      "AI에게 사진, 문서 파일 등을 업로드해서 분석을 요청한 경험이 있습니까?",
    options: [
      {
        text: "네, 이미지 분석이나 파일 요약 등 다양한 기능을 활용해 봤습니다.",
        score: 10,
      },
      {
        text: "텍스트 대화만 해봤고, 파일이나 이미지를 써본 적은 없습니다.",
        score: 5,
      },
      { text: "그런 기능이 있는지 잘 모릅니다.", score: 0 },
    ],
  },
];
