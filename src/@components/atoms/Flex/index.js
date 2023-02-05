import { ReactNode } from "react";
import styled from "styled-components";

export function Flex({
  children,
  direction = "column",
  justify = "center",
  align = "center",
  gap = 0,
  width = "100%",
  wrap = "no-wrap",
}) {
  return (
    <FlexBase
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      width={width}
      wrap={wrap}
    >
      {children}
    </FlexBase>
  );
}

const FlexBase = styled.div`
  display: flex;
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: ${({ wrap }) => wrap};
`;
