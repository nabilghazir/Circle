import { ResetForm } from "../features/auth/component/resetform";
import { Flex, Text } from "@chakra-ui/react";

export function ResetPass() {
  return (
    <Flex
      direction="column"
      marginTop={"-150px"}
      width={"412px"}
      height={"336px"}
    >
      <Text as="h1" textAlign="left" margin="0">
        circle
      </Text>
      <Text as="h2" textAlign="left">
        Reset password
      </Text>
      <ResetForm />
    </Flex>
  );
}
