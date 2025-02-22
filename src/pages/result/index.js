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
    let a = 1;
    localStorage.removeItem("major");
    localStorage.removeItem("sgType");
    router.push("/");
  };

  const share = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `당신은 ${type.name}형!`,
        description: type.desc[0],
        imageUrl: `https://sogangtype.com/${type.image}`,
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

    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(key);
      }
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
          <WhiteBox width="80%">
            <CharacterImg src={type.image} width="60%" margin="0 0 30px" />
            {type.desc.map((el, idx) => (
              <div key={idx}>
                <Text weight={idx === 0 ? "bold" : "normal"}>{el}</Text>
                <br />
                <br />
              </div>
            ))}
          </WhiteBox>
          <WhiteBox width="80%">
            <Stats stats={stats} type={type.name} major={major} />
          </WhiteBox>

          <Button text="유형 순위보기" onClick={rank} />
          <Button text="다시하기" onClick={retry} />
          <Button text="결과 공유하기" onClick={share} bgColor={COLOR_MAIN_RED} color={COLOR_WHITE_TEXT} />
          <Button text="테스트가 재밌으셨나요?" onClick={likelion} bgColor={COLOR_MAIN_RED} color={COLOR_WHITE_TEXT} />
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
