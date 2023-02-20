import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";

import axios from "axios";
import { APIURL } from "~/config";
import Rank from "~/@components/organisms/Rank";

const RankPage = () => {
  const router = useRouter();

  const [ranks, setRanks] = useState([]);

  const sendRequest = async () => {
    const ret = await axios.get(`${APIURL}/api/stats/rank/`);

    console.log(ret);
    const data = ret.data;

    let num = 1;
    let temp = [];
    for (let key in data) {
      const rank = {
        num,
        type: data[key][0],
        stat: data[key][1],
      };
      num += 1;
      temp.push(rank);
    }

    console.log(temp);
    setRanks(temp);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <Flex>
      <Text typeText={true}>유형 순위</Text>

      {ranks ? ranks.map((rank) => <Rank key={rank.num} num={rank.num} type={rank.type} stat={rank.stat} />) : ""}
    </Flex>
  );
};

export default RankPage;
