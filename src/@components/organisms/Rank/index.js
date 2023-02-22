import React from "react";
import styled from "styled-components";
import { CharacterImg } from "~/@components/atoms/CharacterImg";
import { COLOR_MAIN_RED } from "~/@utils/color";
import { types } from "~/@utils/data";

const Rank = ({ num, type, stat }) => {
  if (!type || !stat) {
    return <></>;
  }
  return (
    <RankDiv>
      <RankNum>{num}</RankNum>

      <div style={{ flex: 2 }}>
        <TypeName>{types[type].name} 형</TypeName>
        <TypeDesc>{types[type].desc[0]}</TypeDesc>
      </div>

      <StatDiv>
        <Stat>전체 중 {stat}%</Stat>
        <CharacterImg src={types[type].image} width="60%" />
      </StatDiv>
    </RankDiv>
  );
};

export default Rank;

const RankDiv = styled.div`
  width: 90%;
  padding: 15px;
  //   background-color: white;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1.5px solid ${COLOR_MAIN_RED};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RankNum = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 20px;
  text-align: center;
  color: ${COLOR_MAIN_RED};
`;

const TypeName = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const TypeDesc = styled.p`
  font-size: 0.7rem;
  color: #686868;
`;

const Stat = styled.p`
  font-size: 0.5rem;
  border-radius: 20px;
  padding: 2px 10px;
  background-color: #dedede;
  text-align: center;
  width: max-content;
  flex-shrink: 1;
  color: #686868;
  margin-bottom: 7px;
`;

const StatDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  //   background-color: orange;
  justify-content: center;
  align-items: center;
`;
