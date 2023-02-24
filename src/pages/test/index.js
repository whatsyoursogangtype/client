import Link from "next/link";
import React, { useState } from "react";
import { Button } from "~/@components/atoms/Button";
import { Flex } from "~/@components/atoms/Flex";
import { StateBar } from "~/@components/organisms/StateBar";
import { Text } from "~/@components/atoms/Text";
import { data } from "~/@utils/data.js";
import { useRouter } from "next/router";
import { CharacterImg } from "~/@components/atoms/CharacterImg";
import { COLOR_MAIN_RED, COLOR_WHITE_TEXT } from "~/@utils/color";
import axios from "axios";
import { types } from "~/@utils/data.js";
import { APIURL } from "~/config";

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
  const [stateWidth, setStateWidth] = useState(`5%`);
  const router = useRouter();

  const onClick = (e) => {
    setCurIdx(curIdx + 1);
    const typeValue = e.target.id;
    if (curIdx < data.length) {
      setCurType({ ...curType, [typeValue]: curType[typeValue] + 1 });
    }
    const width = ((curIdx + 1) / data.length) * 100;
    setStateWidth(`${width}%`);
  };

  const postResult = async (sg_type, major) => {
    const ret = await axios.post(`${APIURL}/api/user/`, {
      major,
      sg_type: sg_type,
    });

    let userId = null;
    if (ret.status === 201) {
      userId = ret.data.id;
    }

    return userId;
  };

  const showResult = async () => {
    let type = "";

    if (curType.study >= 2) {
      type += "S";
    } else {
      type += "R";
    }

    if (curType.jinro >= 2) {
      type += "J";
    } else {
      type += "I";
    }

    if (curType.leader >= 2) {
      type += "L";
    } else {
      type += "M";
    }

    localStorage.setItem("sgType", type);

    // const type_name = types[type].name;
    const sg_type = type;
    const major = localStorage.getItem("major");

    const userId = await postResult(sg_type, major);

    localStorage.setItem("userId", userId);
    router.push("/result");
  };

  return (
    <Flex>
      {curIdx >= data.length ? (
        // <Link href={"/result"} style={{ width: "100%" }}>
        //   <Button onClick={showResult} text={"결과보기"} />
        // </Link>
        <>
          <CharacterImg src="all.png" width="50%" margin="100px 0 50px" />
          <Button onClick={showResult} text={"결과보기"} bgColor={COLOR_MAIN_RED} color={COLOR_WHITE_TEXT} />
        </>
      ) : (
        <>
          {/* 질문 */}
          <div style={{ height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Text qText={true}>Q. {data[curIdx].question}</Text>
          </div>
          {/* 상태 바 */}
          <StateBar stateWidth={stateWidth} />
          {/* 답변 - 1 */}
          <Button text={data[curIdx].answers[0].answer} id={data[curIdx].answers[0].label} onClick={onClick} />
          {/* 답변 - 2 */}
          <Button text={data[curIdx].answers[1].answer} id={data[curIdx].answers[1].label} onClick={onClick} />
        </>
      )}
    </Flex>
  );
};

export default Test;
