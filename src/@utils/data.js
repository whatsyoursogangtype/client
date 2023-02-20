export const data = [
  {
    id: 1,
    question: "새내기가 된 당신. 미리 시간표를 짜보려고 한다. 어떻게 짜볼까?",
    answers: [
      {
        id: "1-1",
        answer: "얻어갈 것이 많은 수업이 좋다",
        label: "study",
      },
      {
        id: "1-2",
        answer: "친구랑 같이 들을 수 있는 수업이 좋다",
        label: "relationship",
      },
    ],
  },
  {
    id: 2,
    question: "오늘은 개강날이다. 집이 먼 당신은 통학을 해야하는데…",
    answers: [
      {
        id: "2-1",
        answer: "이미 통학 루트 완벽 파악! 빠른 환승 위치, 버스, 전철 시간표를 완벽히 파악하고 있다. 넉넉하게 도착",
        label: "jinro",
      },
      {
        id: "2-2",
        answer: "가는 방법 정도만 알아 놓고 일단 집에서 나간다. 강의 시작 1분 전 세이프",
        label: "ildan",
      },
    ],
  },
  {
    id: 3,
    question: "고대하던 첫 수업. 팀플을 하는데 아무도 맡으려 하지 않는다...",
    answers: [
      {
        id: "3-1",
        answer: "답답해서 내가 한다 어휴...",
        label: "leader",
      },
      {
        id: "3-2",
        answer: "눈치 있으면 아무나 해라 좀!!",
        label: "member",
      },
    ],
  },
  {
    id: 4,
    question: "동아리 거리제가 다가왔다. 동아리를 정할 때 당신은?",
    answers: [
      {
        id: "4-1",
        answer: "언제 이런 거 또 해보겠어? 재밌어 보이는 동아리에 지원한다",
        label: "ildan",
      },
      {
        id: "4-2",
        answer: "무조건 내 진로 따라 가야지! 관련 학회에 들어간다.",
        label: "jinro",
      },
    ],
  },
  {
    id: 5,
    question: "수업 공부를 하다가 모르는 부분이 생겼다",
    answers: [
      {
        id: "5-1",
        answer: "원서를 뒤져서라도 내가 찾아낸다",
        label: "leader",
      },
      {
        id: "5-2",
        answer: "아몰랑… 교수님에게 물어본다.",
        label: "ildan",
      },
    ],
  },
  {
    id: 6,
    question: "아기다리 고기다리던 축제 날! 내가 좋아하는 가수가 온다는 소식을 들었다. 하지만 내일이 전공 쪽지시험...",
    answers: [
      {
        id: "6-1",
        answer: "에라 모르겠다 쪽지시험 한번 쯤이야. 살면서 좋아하는 가수 언제 또 보노? ",
        label: "relationship",
      },
      {
        id: "6-2",
        answer: "가수가 밥 먹여주냐? 닥치고 공부한다.",
        label: "study",
      },
    ],
  },
  {
    id: 7,
    question: "오늘부터 시험 공부하기로 마음 먹었는데 학과 친구들이 술을 먹자고 한다...",
    answers: [
      {
        id: "7-1",
        answer: "진짜진짜진짜 내일부터 무조건 한다. ",
        label: "relationship",
      },
      {
        id: "7-2",
        answer: "중요한 건 꺾이지 않는 마음… 미안해 친구들아",
        label: "study",
      },
    ],
  },
  {
    id: 8,
    question: "진짜진짜진짜 시험공부를 하려고 한다. 내 공부방법은?",
    answers: [
      {
        id: "8-1",
        answer: "일단 내가 재미있는 과목을 먼저 많이 공부한다",
        label: "leader",
      },
      {
        id: "8-2",
        answer: "비슷비슷하게 시간 배분해서 공부한다",
        label: "member",
      },
    ],
  },
  {
    id: 9,
    question: "으아아 종강이다! 종강한 당신의 모습은?",
    answers: [
      {
        id: "9-1",
        answer: "일단 좀 쉬자... 밀린 넷플릭스를 시청한다.",
        label: "ildan",
      },
      {
        id: "9-2",
        answer: "방학도 허투루 보낼 순 없어! 방학 계획을 짠다",
        label: "jinro",
      },
    ],
  },
];

export const types = {
  SJL: {
    id: "coffebreak",
    name: "커피브레이크",
    desc: "커피브레이크는 영어로 coffebreak..",
  },
  SJM: {
    id: "loyola",
    name: "로욜라",
    desc: "로욜라는 영어로 loyola...",
  },
  SIL: {
    id: "xlab",
    name: "X관랩실",
    desc: "x관랩실이 대체 뭔데",
  },
  SIM: {
    id: "job",
    name: "취업지원팀",
    desc: "최성욱 과장님 화이팅..",
  },
  RJL: {
    id: "alba",
    name: "알바트로스탑",
    desc: "그대 서강의 자랑이듯 서강 그대의 자랑이어라…",
  },
  RJM: {
    id: "forest",
    name: "경의선숲길",
    desc: "동상 보러가자",
  },
  RIL: {
    id: "sinchon",
    name: "빨간잠망경",
    desc: "왜 잠망경은 빨갛니",
  },
  RIM: {
    id: "soju",
    name: "서강포차",
    desc: "달려보즈아~",
  },
};

export const majors = [
  "국어국문학과",
  "사학과",
  "철학과",
  "종교학과",
  "영미어문전공",
  "미국문화전공",
  "유럽문화학과",
  "중국문화학과",
  "사회학과",
  "정치외교학과",
  "심리학과",
  "경제학과",
  "경영학과",
  "신문방송학과",
  "미디어&엔터테인먼트학과",
  "글로벌한국학과",
  "아트&테크놀로지학과",
  "수학과",
  "물리학과",
  "화학과",
  "생명과학과",
  "전자공학과",
  "컴퓨터공학과",
  "화공생명공학과",
  "기계공학과",
  "인공지능학",
  "시스템반도체공학",
  "대학원",
  "기타",
];
