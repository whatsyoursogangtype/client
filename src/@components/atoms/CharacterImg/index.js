import styled, { css } from "styled-components";
import { COLOR_MAIN_RED, COLOR_MAIN_TEXT } from "~/@utils/color";

export function CharacterImg({
  margin,
  children,
  id = "none",
  width = "100%",
  src,
}) {
  return <StyledCharacter src={src} width={width} margin={margin} />;
}

const StyledCharacter = styled.img`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  object-fit: contain;
`;
