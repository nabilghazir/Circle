import { Flex, Text } from "@chakra-ui/react";
import { RegisterForm } from "../features/auth/component/registerform";

export function RegisterPages() {
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
        Create account Circle
      </Text>
      <RegisterForm />
      <Text textAlign="left">
        Already have an account? <Text as="span">Login</Text>
      </Text>
    </Flex>
  );
}
