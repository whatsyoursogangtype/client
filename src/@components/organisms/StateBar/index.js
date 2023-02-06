import styled, { css } from "styled-components";
import { Text } from "~/@components/atoms/Text";
import { COLOR_MAIN_RED, COLOR_MAIN_TEXT } from "~/@utils/color";

export function StateBar({ children, id = "none", stateWidth }) {
  return (
    <StyledDiv>
      <CharacterImg src="likelion.png" location={stateWidth} />
      <StyledStateBar>
        <StyledState stateWidth={stateWidth} />
      </StyledStateBar>
      <TextDiv>
        <Text>개강</Text>
        <Text>종강</Text>
      </TextDiv>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 80%;
  margin-bottom: 50px;
`;
const StyledStateBar = styled.div`
  height: 12px;
  border-radius: 10px;
  background-color: white;
  // border: 1px solid ${COLOR_MAIN_RED};
`;
const StyledState = styled.div`
  border-radius: 10px;
  width: ${({ stateWidth }) => stateWidth};
  height: 100%;
  background-color: ${COLOR_MAIN_RED};
  transition: 0.3s;
`;
const CharacterImg = styled.img`
  width: 10%;
  object-fit: contain;
  margin-left: ${({ location }) => `calc(${location} - 5%)`};
`;
const TextDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
