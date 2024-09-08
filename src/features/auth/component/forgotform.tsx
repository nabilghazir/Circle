import { forgotHooks } from "../hooks/forgothooks";
import { Flex, FormControl, Input, Button } from "@chakra-ui/react";

export function ForgotForm() {
  const { handleChanges, handleSubmit } = forgotHooks();
  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="10px">
        <FormControl isRequired>
          <Input
            type="email"
            name="email"
            placeholder="Email *"
            onChange={handleChanges}
            height={"48px"}
            width={"95%"}
            borderRadius={"10px"}
            padding={"0px 10px"}
            border={"1px solid #545454"}
            bg="transparent"
          />
        </FormControl>
        <Button
          type="submit"
          height={"48px"}
          width={"100%"}
          borderRadius={"100px"}
          border={"1px solid #545454"}
          bg="transparent"
        >
          Send Instruction
        </Button>
      </Flex>
    </form>
  );
}
