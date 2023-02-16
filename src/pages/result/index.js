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

const Result = () => {
  const router = useRouter();
  const [type, setType] = useState();

  const retry = () => {
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
  useEffect(() => {
    const result = localStorage.getItem("sgType");

    if (result) {
      setType(types[result]);
    } else {
      router.push("/");
    }
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(key);
    }
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
