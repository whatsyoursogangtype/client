import styled from "styled-components";

export function WhiteBox({ children, width = "60%" }) {
  return <StyledBox width={width}>{children}</StyledBox>;
}

const StyledBox = styled.div`
  background-color: white;
  padding: 10px;
  width: ${({ width }) => width};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
