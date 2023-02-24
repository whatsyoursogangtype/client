import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Button } from "~/@components/atoms/Button";
import { CharacterImg } from "~/@components/atoms/CharacterImg";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import { WhiteBox } from "~/@components/atoms/WhiteBox";
import { COLOR_MAIN_RED, COLOR_MAIN_YELLOW, COLOR_WHITE_TEXT } from "~/@utils/color";

const Likelion = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("https://www.applion11th.com");
  };
  return (
    <Flex>
      <Text bigText={true}>당신은....</Text>
      <Text typeText={true}>멋쟁이사자처럼형!</Text>
      <WhiteBox width={"80%"}>
        <CharacterImg src="lion.png" width="80%" />
        <div>
          <Text weight="bold">POSSIBILITY TO REALITY</Text>
          <br />
          <br />
        </div>
        <div>
          <Text>
            멋쟁이사자처럼 유형의 사람들은 새로운 것에 관심이 많으며 주도적으로 문제를 해결하고자 하는 경향이
            강합니다.자신의 아이디어를 누군가에게 전달하고, 그것이 실현되는 과정에서 함께 참여하고 싶어합니다. 새로운
            아이디어를 제안하고, 팀의 역량을 살려 아이디어를 구현하는 것을 즐기며, 문제가 발생해도 단순히 해결하는
            것보다는 그 과정에서 무엇을 배울 수 있는지에 관심이 많습니다. 이 유형의 사람들은 적극적으로 도전을 시도하고,
            실패해도 그것을 극복하면서 성장하는 모습을 보입니다. 멋쟁이사자처럼은 여러분의 도전을 응원합니다!
          </Text>
        </div>
        <br />
        <br />
      </WhiteBox>
      <Flex>
        <Button text="지원사이트 바로가기" color={COLOR_WHITE_TEXT} bgColor={COLOR_MAIN_RED} onClick={onClick} />
      </Flex>
    </Flex>
  );
};

export default Likelion;
