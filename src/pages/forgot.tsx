import { ForgotForm } from "../features/auth/component/forgotform";
import { Flex, Text } from "@chakra-ui/react";

export function ForgotPages() {
  return (
    <>
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
          Forgot Password
        </Text>
        <ForgotForm />
        <Text textAlign="left">
          Already have an account? <Text as="span">Login</Text>
        </Text>
      </Flex>
    </>
  );
}
