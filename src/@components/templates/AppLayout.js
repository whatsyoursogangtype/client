import React from "react";
import styled from "styled-components";

const AppLayout = ({ children }) => {
  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

const AppLayoutContainer = styled.div`
  max-width: 430px;
  margin: 0 auto;
`;

export default AppLayout;
