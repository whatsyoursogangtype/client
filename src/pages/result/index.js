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

  const share = () => {};

  const likelion = () => {
    router.push("/likelion");
  };

  useEffect(() => {
    const result = localStorage.getItem("sgType");

    if (result) {
      setType(types[result]);
    } else {
      router.push("/");
    }
  }, []);
  console.log(type);

  return (
    <Flex>
      <Text>당신의 서강 유형은!</Text>
      {type ? (
        <>
          {" "}
          <Text>{type.name}</Text>
          <Button text="다시하기" onClick={retry} />
          <Button text="결과 공유하기" />
          <Button text="테스트가 재밌으셨나요?" onClick={likelion} />
        </>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Result;
