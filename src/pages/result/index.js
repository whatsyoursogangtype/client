import React, { useEffect, useState } from "react";
import { types } from "~/@utils/data";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import { useRouter } from "next/router";
import { Button } from "~/@components/atoms/Button";

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
    if (!Kakao.isInitialized()) {
      window.Kakao.init(key);
    }
  }, []);

  return (
    <Flex>
      <Text>당신의 서강 유형은!</Text>
      {type ? (
        <>
          {" "}
          <Text>{type.name}</Text>
          <Button text="다시하기" onClick={retry} />
          <Button text="결과 공유하기" onClick={share} />
          <Button text="테스트가 재밌으셨나요?" onClick={likelion} />
        </>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Result;
