import styled from "styled-components";

export function Text({
  size = 1,
  weight = "normal",
  color = "black",
  children,
  spacing = -0.6,
  font = "onLeaf",
  cursor = "auto",
  underline = false,
  lineHeight = "120%",
  id = "none",
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
`;
