export const data = [
  {
    id: 1,
    question: "새내기가 된 당신. 미리 시간표를 짜보려고 한다. 어떻게 짜볼까?",
    answers: [
      {
        id: "1-1",
        answer: "얻어갈 것이 많은 수업이 좋다.",
        label: "study",
      },
      {
        id: "1-2",
        answer: "친구랑 같이 들을 수 있는 수업이 좋다.",
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
        answer:
          "이미 통학 루트 완벽 파악! 빠른 환승 위치, 버스, 전철 시간표를 완벽히 파악하고 있다. 넉넉하게 도착",
        label: "jinro",
      },
      {
        id: "2-2",
        answer:
          "가는 방법 정도만 알아 놓고 일단 집에서 나간다. 강의 시작 1분 전 세이프",
        label: "ildan",
      },
    ],
  },
  {
    id: 3,
    question:
      "고대하던 첫 수업..! 팀 프로젝트를 진행해야 하는데 팀장을 아무도 맡으려 하지 않는다..",
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
        answer: "언제 이런 거 또 해보겠어? 재밌어 보이는 동아리에 지원한다.",
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
    question: "전공 수업 복습을 하던 중 이해가 안가는 부분이 생겼다..",
    answers: [
      {
        id: "5-1",
        answer: "원서를 뒤져서라도 내가 찾아낸다.",
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
    question:
      "기다리고 기다리던 축제 날! 내가 좋아하는 가수가 온다는 소식을 들었다. 하지만 내일이 전공 쪽지시험...",
    answers: [
      {
        id: "6-1",
        answer:
          "에라 모르겠다 쪽지시험 한번 쯤이야. 살면서 좋아하는 가수 언제 또 보노? ",
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
    question:
      "오늘부터 시험 공부하기로 마음 먹었는데 학과 친구들이 술을 먹자고 한다...",
    answers: [
      {
        id: "7-1",
        answer: "진짜진짜진짜 내일부터 무조건 한다. ",
        label: "relationship",
      },
      {
        id: "7-2",
        answer: "중요한 건 꺾이지 않는 마음… 미안해 친구들아..",
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
        answer: "일단 내가 재미있는 과목을 먼저 많이 공부한다.",
        label: "leader",
      },
      {
        id: "8-2",
        answer: "비슷비슷하게 시간 배분해서 공부한다.",
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
        answer: "방학도 허투루 보낼 순 없어! 방학 계획을 짠다.",
        label: "jinro",
      },
    ],
  },
];

export const types = {
  SJL: {
    id: "coffeebreak",
    name: "커피브레이크",
    desc: [
      "커브가 곧 나의 집! 당신은 혹시 커브 지박령…?!??",
      "커피브레이크형은 학교 생활에서 학업에 최대한 집중하고, 자신의 진로에 대한 명확한 비전을 가지고 있습니다. 또한, 그들은 팀 프로젝트에서 팀장 역할을 선호하며, 조직력과 리더십 능력이 뛰어납니다. 이 유형의 사람들은 집중력이 뛰어나며, 학업이나 진로와 관련된 일에 대한 열정과 몰입력이 높습니다. 그러나, 다른 사람들과 대화를 나누거나 네트워킹하는 것보다는 스스로 공부하는 것이 편할 때가 많습니다. 팀 프로젝트에서 팀장 역할을 맡으면, 이들은 팀의 목표를 달성하기 위해 자신의 목표와 노력을 전체 팀원들과 공유합니다. 그리고 각자의 역할과 책임을 명확히 분담하고, 팀원들의 역량을 고려해 역할을 배분합니다. 이들은 대부분 효율적인 일처리와 전략적인 계획 수립 등에 능합니다.",
    ],
    image: "coffeebreak.png",
  },
  SJM: {
    id: "loyola",
    name: "로욜라",
    desc: [
      "자네.. 내 연구실에 들어올 생각 없나?",
      "로욜라형은 학업에 집중하면서도 진로가 명확하게 정해져 있어서 해당 분야에서의 경력을 쌓으려는 생각을 가지고 있습니다. 또한, 다른 사람들과 함께 일하는 것을 좋아하지만, 팀의 리더로서 주도적인 역할을 맡는 것보단 팀 내에서 각자의 역할을 잘 수행하려고 노력하는 편입니다. 팀 내에서 전략적으로 역할을 수행하여 효율적인 일처리를 하며, 다른 사람들의 아이디어에 열려 있습니다. 일을 계획적으로 처리하는 것을 좋아하며 차분하고 꼼꼼한 성격의 소유자일 가능성이 높습니다. 전체적으로, 이 유형의 사람들은 명확한 진로를 향해 나아가면서도 팀원들과 함께 협력하여 목표를 달성하는 것을 중요시하고 있습니다.",
    ],
    image: "loyola.png",
  },
  SIL: {
    id: "xlab",
    name: "X관랩실",
    desc: [
      "집 언제 가냐구요? X관랩실이 집 아닌가요?",
      "X관랩실형은 학교생활에서 주로 학업에 집중하면서 다양한 경험을 쌓으려는 유형입니다. 새로운 일을 시도하고 도전하는 것을 좋아하지만, 그 전에 먼저 자신의 업무나 학업에 충실하고자 합니다. 이 유형의 사람들은 일단 무언가에 도전해보고, 그 결과를 토대로 결정을 내리는 경향이 있습니다. 그래서 자신이 관심 있는 분야에 대해서는 빠르게 배우고 성장할 수 있습니다. 또한, 이 유형의 사람들은 다양한 경험을 쌓기 위해 학교 생활에서 봉사활동, 동아리 활동, 대외활동 등 다양한 활동에 참여합니다. 이 유형의 사람들은 팀 프로젝트에서는 주로 팀장 역할을 맡으며, 팀원들에게 일의 목표와 방향성을 제시하고 일의 진행 상황을 적극적으로 관리하고, 갈등이나 문제가 발생했을 때 이를 해결하기 위해 노력합니다.",
    ],
    image: "xlab.png",
  },
  SIM: {
    id: "job",
    name: "취업지원팀",
    desc: [
      "최성욱 차장님 사랑합니다",
      "취업지원팀형은 학업에 집중하면서도 새로운 일을 경험해보려는 욕구를 가지고 있습니다. 그래서 이들은 학업을 중심으로 하면서도 여러 분야에 관심을 가지고 있으며, 시간을 투자해서 새로운 것을 배우려고 노력합니다. 이들은 자신의 시간과 노력을 아끼지 않고, 여러 가지 일을 경험해보는 것을 좋아합니다. 그래서 어떤 일이든 일단 해보고, 경험을 통해 자신이 어떤 일을 좋아하는지 찾으려고 합니다. 이들은 도전을 즐기며, 새로운 일을 시도할 때 두려움보다는 기대감이 더 큽니다. 또한, 이들은 팀원으로서 효율적으로 일하며, 팀원들의 역량을 인정하고 존중합니다. 팀의 성공을 위해 전략적으로 일하는 것을 좋아하며, 팀원들이 각자의 역할을 잘 수행할 수 있도록 조화롭게 대화하며 일하는 모습을 보입니다. 이들은 다른 사람과의 협력을 중요하게 생각하며, 팀원들과 함께 성장하는 것을 즐기는 경향이 있습니다.",
    ],
    image: "job.png",
  },
  RJL: {
    id: "alba",
    name: "알바트로스탑",
    desc: [
      "그대 서강의 자랑이듯 서강 그대의 자랑이어라",
      "알바트로스탑형은 다른 사람들과 소통하는 것을 좋아하며, 사람들과 인맥을 형성하고 유지하는 능력이 뛰어난 사람들입니다. 또한, 자신이 어떤 진로를 살아가고 싶은지 명확하게 정해놓은 경우가 많으며, 그 방향성에 대한 목표 달성을 위해 노력합니다. 이 유형의 사람들은 주도적인 성격을 가지고 있어, 팀 프로젝트에서 팀장을 맡거나 주도적인 역할을 맡는 것을 좋아합니다. 팀원들과의 소통과 협력을 통해 효과적으로 일을 수행하며, 타인의 의견에도 경청하는 자세를 보입니다. 이 유형의 사람들은 다른 사람들과 함께 일하는 것을 좋아하며, 팀워크를 중요하게 생각합니다.",
    ],
    image: "alba.png",
  },
  RJM: {
    id: "forest",
    name: "경의선숲길",
    desc: [
      "경의선 숲길을 따라 앞으로 전진!",
      "경의선숲길형은 진로에 대한 명확한 목표를 가지고 있으며, 이를 위해 꾸준한 노력과 열정으로 공부를 하며 자신의 능력을 향상시키려 합니다. 또한 인맥 형성을 중요하게 생각하지만, 이를 위해서는 진로와 연관된 사람들과 관계를 형성하려 합니다. 또한, 팀 프로젝트에 참여할 때는 팀원들의 강점과 약점을 파악하고, 그에 따라 효율적인 역할 분담을 결정합니다. 상황에 따라 팀을 이끌기도 하지만, 능동적으로 협력하여 팀 전체의 목표를 달성하려 노력합니다. 이 유형의 학생들은 진로에 대한 목표를 달성하기 위해 협력과 노력을 아끼지 않으며, 인맥 형성도 중요시하여 다양한 사람들과 관계를 형성하려 합니다.",
    ],
    image: "forest.png",
  },
  RIL: {
    id: "sinchon",
    name: "빨간잠망경",
    desc: [
      "무슨 노래 듣고있냐구요? 뉴진스의 하입보이요",
      "빨간잠망경형은 인맥을 형성하는 네트워킹이 중요하다는 인식을 가지고 있는 동시에, 새로운 경험과 모험을 꺼리지 않는 유형입니다. 따라서 학교생활을 통해 다양한 경험을 쌓고, 그 과정에서 사람들과 인맥을 형성하려는 성향이 강합니다. 또한, 이 유형의 사람들은 리더십이 뛰어나, 자신이 관심있는 분야에서 주도적으로 팀을 이끌며 목표를 달성하고자 하는 경향이 있습니다. 이러한 성격 덕분에 팀원들의 역할 분담과 시간 관리를 잘하며, 팀 프로젝트에서 좋은 성과를 내는 경우가 많습니다. 이 유형의 사람들은 새로운 도전을 즐기는 면과 주도적인 성격을 가지고 있어, 다른 사람들과 함께 일하는 것을 좋아합니다.",
    ],
    image: "sinchon.png",
  },
  RIM: {
    id: "soju",
    name: "서강포차",
    desc: [
      "대학생활을 진정 즐길줄 아는 당신은 슈퍼인싸!",
      "서강포차형은 인맥 형성과 새로운 경험에 관심이 많지만, 이들이 추구하는 가치는 다양합니다. 그리고 이들은 새로운 경험을 찾을 때 자신이 관심을 가지는 분야에 대해서는 꽤나 확고한 결심이 있을 가능성이 높습니다. 이들은 자신이 어떤 분야에서 활동할지 명확하게 결정하기 전까지는 일단 다양한 경험을 쌓아보고자 합니다. 또한, 이 유형의 학생들은 다른 사람들과 함께 일하는 것을 좋아하며, 팀원으로서 효율적이고 전략적으로 일을 처리하는 능력이 있습니다. 이들은 타인과 협력하여 목표를 달성하는 것에 큰 관심을 가지며, 팀원들 간의 관계를 유지하면서 일을 처리하고자 합니다. 이들은 타인에게도 존중받는 팀원이 되고자 합니다. 또한, 술자리에서는 분위기 메이커 역할을 하며 근처 술집에서 자주 찾을 수 있습니다.",
    ],
    image: "soju.png",
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
