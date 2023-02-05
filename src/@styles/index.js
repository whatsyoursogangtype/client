import { css } from "styled-components";

export const commonStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: onLeaf;
  }

  html {
    font-family: onLeaf;
  }

  body {
    line-height: 1.5;
    background-color: #f1f1f1;
  }

  body * {
    font-family: onLeaf;
  }
`;
