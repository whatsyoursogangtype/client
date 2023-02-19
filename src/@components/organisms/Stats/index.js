import styled from "styled-components";
import { COLOR_MAIN_RED } from "~/@utils/color";

export function Stats({ children, stats, type, major }) {
  console.log(stats);
  return (
    <StatsBox>
      <StatsBigText>내 유형 통계</StatsBigText>
      <StatsBigText style={{ fontSize: "0.8rem", lineHeight: "1.3rem" }}>
        {type}형은 <span style={{ color: COLOR_MAIN_RED }}>{stats.stat2}</span>
        가<br /> 가장 높은 비율을 차지합니다!
      </StatsBigText>

      <StatsDiv>
        <StatsBarDiv>
          <StatsBarBase>
            <StatsBar height={stats.stat1}>
              <StatsNum>{stats.stat1}%</StatsNum>
            </StatsBar>
          </StatsBarBase>

          <StatsBarText>
            전체 응시자 중 <br />
            {type}형 비율
          </StatsBarText>
        </StatsBarDiv>
        <StatsBarDiv>
          <StatsBarBase>
            <StatsBar height={stats.stat3}>
              <StatsNum>{stats.stat3}%</StatsNum>
            </StatsBar>
          </StatsBarBase>

          <StatsBarText>
            <p>{major} 응시자 중 </p>
            <p>{type}형 비율</p>
          </StatsBarText>
        </StatsBarDiv>
      </StatsDiv>
    </StatsBox>
  );
}

const StatsBox = styled.div``;

const StatsBigText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const StatsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StatsBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 126px;
  margin: 20px 10px 0;
`;
const StatsBarBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 20px;
  height: calc(100% - 26px);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 2px 2px 0 0;
`;
const StatsBar = styled.div`
  width: 100%;
  height: ${({ height }) => height + "%"};
  //   height: 100%;
  background-color: ${COLOR_MAIN_RED};
  border-radius: 2px 2px 0 0;
  position: relative;
`;
const StatsNum = styled.div`
  position: absolute;
  top: -1.2rem;
  font-size: 0.6rem;
  width: 100%;
  line-height: 1.2rem;
  text-align: center;
`;
const StatsBarText = styled.div`
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: center;
  margin-top: 8px;
`;
