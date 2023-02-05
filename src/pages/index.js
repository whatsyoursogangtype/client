import { Button } from "~/@components/atoms/Button";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("/test");
  };

  return (
    <Flex>
      <Text>What&apos;s your Sogang Type</Text>
      <Button text="테스트 시작하기" onClick={onClick} />
    </Flex>
  );
}
