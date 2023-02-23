import React from "react";
import styled, { keyframes } from "styled-components";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";

const ToastBar = () => {
  return (
    <ToastBarContainer>
      <Flex>
        <Text>링크가 복사되었습니다!</Text>
      </Flex>
    </ToastBarContainer>
  );
};

const FadeInandOut = keyframes`
0%, 100% {
    transfrom : translateY(0px);
    opacity 0;
  }
  50% {
    transfrom : translateY(-20px);
    opacity 1;
  }


`;

const ToastBarContainer = styled.div`
  animation: ${FadeInandOut} 1.5s forwards;
  background-color: white;
  padding: 10px 30px;
  border-radius: 10px;
`;

export default ToastBar;
