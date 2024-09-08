import { registerHooks } from "../hooks/registerhooks";
import { Button, Flex, FormControl, Input } from "@chakra-ui/react";

export function RegisterForm() {
  const { handleChanges, handleSubmit } = registerHooks();
  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="10px">
        <FormControl isRequired>
          <Input
            type="text"
            name="username"
            placeholder="Username *"
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
            type="email"
            name="email"
            placeholder="Email *"
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
        <Button width={"100%"} type="submit" borderRadius={150}>
          Register
        </Button>
      </Flex>
    </form>
  );
}
