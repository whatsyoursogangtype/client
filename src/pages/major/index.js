import { Button } from "~/@components/atoms/Button";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import { useRouter } from "next/router";
import {
  COLOR_MAIN_RED,
  COLOR_MAIN_YELLOW,
  COLOR_WHITE_TEXT,
} from "~/@utils/color";
import { CharacterImg } from "~/@components/atoms/CharacterImg";
import { useState } from "react";
import styled from "styled-components";
import { majors } from "~/@utils/data";
import { StateBar } from "~/@components/organisms/StateBar";

export default function ChooseMajor() {
  const [toggle, setToggle] = useState(false);
  const [major, setMajor] = useState("");
  const router = useRouter();

  const onClick = () => {
    if (!major) {
      alert("학과를 선택해주세요!");
      return;
    }
    localStorage.setItem("major", major);
    router.push("/test");
  };

  return (
    <Flex>
      <Text qText={true}>
        축하합니다!
        <br /> 서강대학교에 입학하셨습니다.
        <br />
        학과를 선택해주세요.
      </Text>

      <StateBar stateWidth={"2%"} />

      <Button
        text={major ? major : "학과 선택하기"}
        onClick={() => setToggle(!toggle)}
      >
        <ArrowDiv onClick={() => setToggle(!toggle)}>
          <ArrowImg src={toggle ? "up.png" : "down.png"} />
        </ArrowDiv>

        {toggle && (
          <DropDown>
            {majors.map((mjr, idx) => (
              <DropDownItem
                key={idx}
                onClick={() => {
                  setMajor(mjr);
                  setToggle(false);
                }}
              >
                {mjr}
              </DropDownItem>
            ))}
          </DropDown>
        )}
      </Button>
      <Button
        text="완료"
        bgColor={COLOR_MAIN_RED}
        color={COLOR_WHITE_TEXT}
        onClick={onClick}
      />
    </Flex>
  );
}

const ArrowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 10;
  width: 11px;
  height: 100%;
`;
const ArrowImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

const DropDown = styled.div`
  position: absolute;
  left: 0;
  bottom: -30.3vh;
  z-index: 10;
  background-color: ${COLOR_MAIN_YELLOW};
  width: 100%;
  border-radius: 10px;
  overflow-y: scroll;
  max-height: 30vh;
`;

const DropDownItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  background-color: ${COLOR_MAIN_YELLOW};
  transition: 0.3s;
  font-size: 0.8rem;

  &:hover {
    background-color: rgba(191, 60, 67, 0.5);
  }
`;
