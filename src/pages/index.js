import { Button } from "~/@components/atoms/Button";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import { useRouter } from "next/router";
import { COLOR_MAIN_RED, COLOR_WHITE_TEXT } from "~/@utils/color";
import { CharacterImg } from "~/@components/atoms/CharacterImg";
import Head from "next/head";
import ToastBar from "~/@components/organisms/ToastBar";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();

  const [isPopup, setIsPopUp] = useState(false);
  const onClick = () => {
    router.push("/major");
  };

  const onCopy = () => {
    window.navigator.clipboard.writeText("https://sogangtype.com");
    setIsPopUp(true);
    setTimeout(() => {
      setIsPopUp(false);
    }, 1500);
  };

  return (
    <Flex>
      <Head>
        <link rel="icon" href="https://sogangtype.com/likelion-logo.png" />
        <title>당신의 서강 유형은?</title>
        <meta property="og:title" content="당신의 서강 유형은?" key="title" />
        <meta property="og:url" content="https://sogangtype.com" />
        <meta property="og:image" content="https://sogangtype.com/meta-img.png" />
        <meta property="og:description" content="What's your sogang type?" />
        <meta property="og:site_name" content="whatsyoursogangtype" />
      </Head>
      <MainText>
        당신의 서강생활 유형은?
        <br />
        What&apos;s your sogang type?
      </MainText>

      <CharacterImg src="all.png" width="70%" margin="20px 0px" />

      <div style={{ marginBottom: "30px" }} />
      <Button text="테스트 시작하기" onClick={onClick} />
      <Button text="링크 공유하기" bgColor={COLOR_MAIN_RED} color={COLOR_WHITE_TEXT} onClick={onCopy} />
      {isPopup ? <ToastBar /> : ""}

      {/* <CharacterImg src="likelion-logo.png" width="15%" margin="100px 0 0" /> */}
    </Flex>
  );
}

const MainText = styled.span`
  font-size: 1.3rem;
  width: 70%;
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
  line-height: 2rem;
`;
