import styled from "styled-components";
import {
  COLOR_MAIN_RED,
  COLOR_MAIN_TEXT,
  COLOR_MAIN_YELLOW,
  COLOR_WHITE_TEXT,
} from "~/@utils/color";
import { Text } from "../Text";

export const Button = ({
  text = "hi",
  padding = "3px 10px",
  radius = "10px",
  bgColor = COLOR_MAIN_YELLOW,
  font = "onLeaf",
  size = 1,
  border = `2px solid ${COLOR_MAIN_RED}`,
  cursor = "pointer",
  color = COLOR_MAIN_TEXT,
  spacing = -0.6,
  id = "none",
  children,
  onClick = () => {
    return;
  },
}) => {
  return (
    <RoundedItemContainer
      padding={padding}
      radius={radius}
      bgColor={bgColor}
      border={border}
      color={color}
      cursor={cursor}
      onClick={onClick}
      id={id}
    >
      <Text
        font={font}
        color={color}
        size={size}
        cursor={"pointer"}
        spacing={spacing}
        id={id}
      >
        {text}
      </Text>

      {children}
    </RoundedItemContainer>
  );
};

const RoundedItemContainer = styled.div`
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  border-radius: ${({ radius }) => radius};
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  width: 70%;
  margin-bottom: 10px;
  position: relative;
`;
