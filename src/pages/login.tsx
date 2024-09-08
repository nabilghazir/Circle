import { LoginForm } from "../features/auth/component/loginform";
import { Flex, Text } from "@chakra-ui/react";

export function LoginPages() {
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
          Login to Circle
        </Text>
        <LoginForm />
        <Text as="p" textAlign="left">
          Dont have an account yet? <Text as="span">Create account</Text>
        </Text>
      </Flex>
    </>
  );
}
