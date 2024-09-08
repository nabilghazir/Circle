import { loginHooks } from "../hooks/loginhooks";
import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

export function LoginForm() {
  const { handleChanges, handleSubmit } = loginHooks();

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="10px">
        <FormControl isRequired>
          <Input
            type="text"
            name="usernameOrEmail"
            placeholder="Username or Email *"
            onChange={handleChanges}
            height={"48px"}
            width={"96%"}
            borderRadius={"10px"}
            padding={"0px 10px"}
            border={"1px solid #545454"}
            bg="transparent"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            type="password"
            name="password"
            placeholder="Password *"
            onChange={handleChanges}
            height={"48px"}
            width={"96%"}
            borderRadius={"10px"}
            padding={"0px 10px"}
            border={"1px solid #545454"}
            bg="transparent"
          />
        </FormControl>
        <Flex justifyContent="flex-end">
          <Text as="span">Forgot Password</Text>
        </Flex>
        <Button width={"100%"} type="submit" borderRadius={150}>
          Login
        </Button>
      </Flex>
    </form>
  );
}
