import React, { useEffect, useState } from "react";
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
        imageUrl: "https://client-ucqx.vercel.app/likelion.png",
        link: {
          mobileWebUrl: "https://client-ucqx.vercel.app",
          webUrl: "https://client-ucqx.vercel.app",
        },
      },
      buttons: [
        {
          title: "당신의 서강 유형은?",
          link: {
            mobileWebUrl: "https://client-ucqx.vercel.app",
            webUrl: "https://client-ucqx.vercel.app",
          },
        },
      ],
    });
  };

  const likelion = () => {
    router.push("/likelion");
  };

  const key = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

  const postResult = async (sg_type) => {
    const ret = await axios.post(`${APIURL}/api/user/`, {
      major,
      sg_type: sg_type,
    });

    let userId = null;
    if (ret.status === 201) {
      userId = ret.data.id;
    }

    return userId;
  };
  const getResult = async (userId) => {
    const ret = await axios.get(`${APIURL}/api/stats/${userId}/`);
    console.log(ret);
    let stats = null;
    if (ret.status === 200) {
      stats = ret.data;
    }

    return stats;
  };

  const sendRequest = async () => {
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

    const userId = await postResult(types[result].name);

    if (!userId) {
      console.log("postResult failed!");
      return;
    }

    const stats = await getResult(userId);

    if (!stats) {
      console.log("getResult failed!");
      return;
    }

    console.log(stats);

    setStats(stats);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <Flex>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
      <Text bigText={true}>당신의 서강 유형은!</Text>
      {type ? (
        <>
          <Text typeText={true}>{type.name}형</Text>
          <WhiteBox>
            <CharacterImg src="likelion.png" width="80%" />
          </WhiteBox>
          <WhiteBox width="80%">
            <Text>
              형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />
              형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />형 설명~~~
              <br />
            </Text>
          </WhiteBox>
          <WhiteBox width="80%">
            <Stats stats={stats} type={type.name} major={major} />
          </WhiteBox>
          <Button text="다시하기" onClick={retry} />
          <Button text="결과 공유하기" onClick={share} />
          <Button text="테스트가 재밌으셨나요?" onClick={likelion} bgColor={COLOR_MAIN_RED} color={COLOR_WHITE_TEXT} />
        </>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Result;
