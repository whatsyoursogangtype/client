import React, { useCallback, useEffect, useState } from "react";
import { types } from "~/@utils/data";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import { useRouter } from "next/router";
import { Button } from "~/@components/atoms/Button";
import Script from "next/script";
import { CharacterImg } from "~/@components/atoms/CharacterImg";
import { COLOR_MAIN_RED, COLOR_WHITE_TEXT } from "~/@utils/color";
import { WhiteBox } from "~/@components/atoms/WhiteBox";
import axios from "axios";
import { APIURL } from "~/config";
import { Stats } from "~/@components/organisms/Stats";
import styled from "styled-components";

const Result = () => {
  const router = useRouter();
  const [type, setType] = useState();
  const [major, setMajor] = useState();
  const [stats, setStats] = useState({});

  const retry = () => {
    localStorage.removeItem("major");
    localStorage.removeItem("sgType");
    router.push("/");
  };

  const share = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: type.name,
        description: type.desc,
        imageUrl: "https://sogangtype.com/likelion.png",
        link: {
          mobileWebUrl: "https://sogangtype.com",
          webUrl: "https://sogangtype.com",
        },
      },
      buttons: [
        {
          title: "당신의 서강 유형은?",
          link: {
            mobileWebUrl: "https://sogangtype.com",
            webUrl: "https://sogangtype.com",
          },
        },
      ],
    });
  };

  const likelion = () => {
    router.push("/likelion");
  };

  const rank = () => {
    router.push("/rank");
  };

  const key = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

  const getResult = async (userId) => {
    const ret = await axios.get(`${APIURL}/api/stats/${userId}/`);
    // console.log(ret);
    let stats = null;
    if (ret.status === 200) {
      stats = ret.data;
    }

    return stats;
  };

  const sendRequest = useCallback(async () => {
    const result = localStorage.getItem("sgType");
    const resultMajor = localStorage.getItem("major");

    if (result) {
      setType(types[result]);
    } else {
      router.push("/");
    }

    if (resultMajor) {
      setMajor(resultMajor);
    } else {
      router.push("/");
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(key);
    }

    const userId = localStorage.getItem("userId");

    const stats = await getResult(userId);

    if (!stats) {
      console.log("getResult failed!");
      return;
    }

    setStats(stats);
  }, []);

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <Flex>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
      <StyledText qText={true}>당신의 서강 유형은!</StyledText>
      {type ? (
        <>
          <Text typeText={true}>{type.name}형</Text>
          {/* <WhiteBox>
            <CharacterImg src="likelion.png" width="80%" />
          </WhiteBox> */}
          <WhiteBox width="80%">
            <CharacterImg src="likelion.png" width="60%" margin="0 0 30px" />
            <Text>
              커브가 곧 나의 집! 당신은 혹시 커브 지박령…?!??
              <br />
              <br /> 과제, 팀플, 성적 뭐 하나도 놓칠 수 없다. 좋은 성적을 위해선
              팀장도 꺼리지 않는 당신! 명확한 목표에 계획을 정해두고
              차근차근하는 스타일이군요. 혹시 팀플에서 팀장을 많이 맡고 계시진
              않나요? 등교 전, 공강 시간, 하교 후 어느 때나 커브에 오면 나를 볼
              수 있어요~
            </Text>
          </WhiteBox>
          <WhiteBox width="80%">
            <Stats stats={stats} type={type.name} major={major} />
          </WhiteBox>

          <Button text="유형 순위보기" onClick={rank} />
          <Button text="다시하기" onClick={retry} />
          <Button
            text="결과 공유하기"
            onClick={share}
            bgColor={COLOR_MAIN_RED}
            color={COLOR_WHITE_TEXT}
          />
          <Button
            text="테스트가 재밌으셨나요?"
            onClick={likelion}
            bgColor={COLOR_MAIN_RED}
            color={COLOR_WHITE_TEXT}
          />
        </>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Result;

const StyledText = styled.span`
  font-size: 1.3rem;
  width: 70%;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
  line-height: 2rem;
`;
