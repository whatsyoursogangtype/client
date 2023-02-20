import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "~/@components/atoms/Button";
import { CharacterImg } from "~/@components/atoms/CharacterImg";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import { WhiteBox } from "~/@components/atoms/WhiteBox";
import { COLOR_MAIN_RED, COLOR_WHITE_TEXT } from "~/@utils/color";

const Likelion = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("https://www.applion11th.com");
  };
  return (
    <Flex>
      <Text bigText={true}>당신은....</Text>
      <Text typeText={true}>멋쟁이사자처럼형!</Text>
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
      <Flex>
        <Button text="지원사이트 바로가기" color={COLOR_WHITE_TEXT} bgColor={COLOR_MAIN_RED} onClick={onClick} />
      </Flex>
    </Flex>
  );
};

export default Likelion;
