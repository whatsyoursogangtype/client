import React from "react";
import styled from "styled-components";

const AppLayout = ({ children }) => {
  return (
    <AppLayoutContainer>
      {children}

      <BackgroundImageDiv>
        <BackgroundImage src="bg-img.png" />
      </BackgroundImageDiv>
    </AppLayoutContainer>
  );
};

const AppLayoutContainer = styled.div`
  max-width: 430px;
  margin: 0 auto;
  background-color: rgba(256, 256, 256, 0.65);
  min-height: 100vh;
  padding: 30px 0;
  position: relative;
`;

const BackgroundImageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export default AppLayout;
