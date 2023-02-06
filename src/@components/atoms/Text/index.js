import styled, { css } from "styled-components";
import { COLOR_MAIN_TEXT } from "~/@utils/color";

export function Text({
  size = 1,
  weight = "normal",
  color = COLOR_MAIN_TEXT,
  children,
  spacing = -0.6,
  font = "onLeaf",
  cursor = "auto",
  underline = false,
  lineHeight = "120%",
  id = "none",
  bigText = false,
  typeText = false,
}) {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      spacing={spacing}
      font={font}
      cursor={cursor}
      underline={underline}
      lineHeight={lineHeight}
      id={id}
      bigText={bigText}
      typeText={typeText}
    >
      {children}
    </StyledText>
  );
}

const StyledText = styled.span`
  font-size: ${({ size }) => size}rem;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  letter-spacing: ${({ spacing }) => spacing}px;
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ font }) => font};
  cursor: ${({ cursor }) => cursor};

  ${({ bigText, typeText }) => {
    if (bigText) {
      return css`
        font-size: 1.5rem;
        width: 70%;
        text-align: center;
        margin: 20px 0;
        font-weight: bold;
      `;
    }

    if (typeText) {
      return css`
        font-size: 2rem;
        width: 70%;
        text-align: center;
        margin: 0 0 10px;
        font-weight: bold;
      `;
    }
  }}
`;
