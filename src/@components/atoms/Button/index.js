import styled from "styled-components";
import { Text } from "../Text";

export const Button = ({
  text = "hi",
  padding = "10px",
  radius = "20px",
  bgColor = "white",
  font = "onLeaf",
  size = 1,
  border = "none",
  cursor = "pointer",
  color = "black",
  spacing = -0.6,
  id = "none",
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
    </RoundedItemContainer>
  );
};

const RoundedItemContainer = styled.div`
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  border-radius: ${({ radius }) => radius};
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
`;
