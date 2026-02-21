export const questions = [
  // -----------------------------------------------------------
  // [PART 1] 생활 (디지털 문해력) - Group 1
  // -----------------------------------------------------------
  {
    id: 1,
    group: 1,
    category: "생활",
    question:
      "스마트폰으로 QR코드를 활용하여 웹사이트에 접속하려 할 때, 가장 올바른 방법은 무엇입니까?",
    options: [
      {
        text: "네이버나 카카오톡 검색창에 'QR코드'라고 검색하여 들어간다.",
        score: 0,
      },
      {
        text: "스마트폰 카메라 앱을 실행하여 화면에 QR코드를 비춘다.",
        score: 10,
      },
      { text: "인터넷 주소창에 QR코드 하단에 적힌 글자를 입력한다.", score: 0 },
      { text: "잘 모르겠습니다.", score: 0 },
    ],
  },
  {
    id: 2,
    group: 1,
    category: "생활",
    question: "PC 카카오톡을 다운로드 받아 컴퓨터에서 로그인할 수 있습니까?",
    options: [
      { text: "네, 원활하게 가능합니다.", score: 10 },
      {
        text: "다운로드 받을 수 있으나 계정 비밀번호가 기억나지 않습니다.",
        score: 5,
      },
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
    question:
      "유튜브(YouTube)에서 내가 원하는 동영상을 검색하거나 특정 채널을 스스로 찾아볼 수 있습니까?",
    options: [
      {
        text: "네, 검색 기능을 활용해 원하는 영상이나 채널을 자유롭게 찾을 수 있습니다.",
        score: 10,
      },
      {
        text: "검색은 해봤지만 원하는 결과를 찾기 어렵거나, 주로 추천해주는 영상만 봅니다.",
        score: 0,
      },
      {
        text: "유튜브에서 검색하는 방법을 모르거나 사용하지 않습니다.",
        score: 0,
      },
    ],
  },
  {
    id: 5,
    group: 1,
    category: "생활",
    question:
      "쿠팡, 네이버 쇼핑 등 온라인 쇼핑몰을 통해 결제를 진행할 수 있습니까?",
    options: [
      {
        text: "네, 카드 등록 및 문자 인증까지 능숙하게 진행합니다.",
        score: 10,
      },
      { text: "할 줄 모릅니다.", score: 0 },
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
    question: "인터넷에 접속하기 위해 실행하는 프로그램은 무엇입니까?",
    options: [
      { text: "유튜브(Youtube)", score: 0 },
      { text: "네이버(Naver)", score: 0 },
      { text: "크롬(Chrome)", score: 10 },
      { text: "잘 모르겠습니다.", score: 0 },
    ],
  },
  {
    id: 8,
    group: 1,
    category: "PC활용",
    question: "파일이나 텍스트 등을 '복사'하는 단축키는 무엇인가요?",
    options: [
      { text: "Ctrl + P", score: 0 },
      { text: "Ctrl + C", score: 10 },
      { text: "Ctrl + V", score: 0 },
      { text: "잘 모르겠습니다.", score: 0 },
    ],
  },
  {
    id: 9,
    group: 1,
    category: "PC활용",
    question: "파일이나 텍스트 등을 '붙여넣기'하는 단축키는 무엇인가요?",
    options: [
      { text: "Ctrl + C", score: 0 },
      { text: "Ctrl + V", score: 10 },
      { text: "Ctrl + P", score: 0 },
      { text: "잘 모르겠습니다.", score: 0 },
    ],
  },
  {
    id: 10,
    group: 1,
    category: "PC활용",
    question:
      "인터넷 화면이 멈추는 등 문제가 발생했을 때 화면을 '새로고침'하는 단축키는 무엇인가요?",
    options: [
      { text: "F1", score: 0 },
      { text: "F5", score: 10 },
      { text: "F12", score: 0 },
      { text: "잘 모르겠습니다.", score: 0 },
    ],
  },

  // -----------------------------------------------------------
  // [PART 3] 수업준비 (환경 및 계정) - Group 2
  // -----------------------------------------------------------
  {
    id: 11,
    group: 2,
    category: "수업준비",
    question:
      "현재 비밀번호를 알고 있어 즉시 로그인 가능한 본인 명의의 구글(Gmail) 계정이 있습니까?",
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
    question: "여러 개의 인터넷 창을 띄워 놓고 자유롭게 전환할 수 있습니까?",
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
    question: "강사의 요청 시 파일을 다운로드 받고 열어 볼 수 있습니까?",
    options: [
      {
        text: "네, 즉시 다운로드 가능하며 해당 파일의 위치를 찾아 열어 볼 수 있습니다.",
        score: 10,
      },
      {
        text: "다운로드는 가능하지만 파일의 위치를 찾는 것은 힘듭니다.",
        score: 5,
      },
      { text: "전혀 못합니다.", score: 0 },
    ],
  },
  {
    id: 15,
    group: 2,
    category: "수업준비",
    question:
      "도움 없이 스스로 웹사이트(네이버, 구글, ChatGPT 등)에 회원가입을 할 수 있습니까?",
    options: [
      {
        text: "네, 휴대폰 인증을 포함한 모든 과정을 스스로 할 수 있습니다.",
        score: 10,
      },
      { text: "전혀 못합니다.", score: 0 },
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
