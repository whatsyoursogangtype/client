import styled from "styled-components";
import { Text } from "~/@components/atoms/Text";

export function Footer({ children, id = "none" }) {
  return (
    <StyledFooter>
      <Text>Copyright ⓒ 2023 멋쟁이사자처럼 서강. All right Reserved.</Text>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;
