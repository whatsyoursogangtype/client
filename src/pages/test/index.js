import React, { useState } from "react";
import { Button } from "~/@components/atoms/Button";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import data from "~/@utils/data.js";

const Test = () => {
  const [curIdx, setCurIdx] = useState(0);
  const [curType, setCurType] = useState({
    study: 0,
    relationship: 0,
    jinro: 0,
    ildan: 0,
    leader: 0,
    member: 0,
  });

  const onClick = (e) => {
    setCurIdx(curIdx + 1);
    const typeValue = e.target.id;
    if (curIdx < data.length) {
      setCurType({ ...curType, [typeValue]: curType[typeValue] + 1 });
    } else {
    }
  };

  console.log(curType);

  return (
    <Flex>
      {curIdx >= data.length ? (
        <Button text={"결과보기"} />
      ) : (
        <>
          <Text>{data[curIdx].question}</Text>
          <Button
            text={data[curIdx].answers[0].answer}
            id={data[curIdx].answers[0].label}
            onClick={onClick}
          />
          <Button
            text={data[curIdx].answers[1].answer}
            id={data[curIdx].answers[1].label}
            onClick={onClick}
          />
        </>
      )}
    </Flex>
  );
};

export default Test;
