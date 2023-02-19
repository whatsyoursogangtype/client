import styled from "styled-components";
import { Text } from "~/@components/atoms/Text";
import { COLOR_MAIN_TEXT } from "~/@utils/color";

export function Footer({ children, id = "none" }) {
  return (
    <StyledFooter>
      <StyledText>
        Copyright ⓒ 2023 멋쟁이사자처럼 서강. All right Reserved.
      </StyledText>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.span`
  font-size: 0.5rem;
  font-family: CookieRun;
  color: ${COLOR_MAIN_TEXT};
`;
