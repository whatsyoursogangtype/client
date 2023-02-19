import styled from "styled-components";
import { COLOR_MAIN_RED } from "~/@utils/color";

export function WhiteBox({ children, width = "60%" }) {
  return <StyledBox width={width}>{children}</StyledBox>;
}

const StyledBox = styled.div`
  // background-color: rgba(255, 248, 221, 0.5);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 15px;
  width: ${({ width }) => width};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border: 1.5px solid ${COLOR_MAIN_RED};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
