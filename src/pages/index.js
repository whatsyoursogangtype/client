import { Button } from "~/@components/atoms/Button";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import { useRouter } from "next/router";
import { COLOR_MAIN_RED, COLOR_WHITE_TEXT } from "~/@utils/color";
import { CharacterImg } from "~/@components/atoms/CharacterImg";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("/major");
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
      <Text bigText={true}>
        당신의 서강생활 유형은?
        <br />
        What&apos;s your Sogang Type
      </Text>

      <CharacterImg src="likelion.png" width="40%" margin="20px 0 50px" />
      <Button text="테스트 시작하기" onClick={onClick} />
      <Button text="링크 공유하기" bgColor={COLOR_MAIN_RED} color={COLOR_WHITE_TEXT} />

      <CharacterImg src="likelion-logo.png" width="15%" margin="100px 0" />
    </Flex>
  );
}
