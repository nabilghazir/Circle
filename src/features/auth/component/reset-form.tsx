
import { Button, Flex, FormControl, Input } from "@chakra-ui/react";

export function ResetForm() {
  return (
    <Flex direction="column" gap="10px">
      <FormControl isRequired>
        <Input
          type="password"
          name="newPassword"
          placeholder="New Password *"
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
          name="comfirmPassword"
          placeholder="Comfirm Password *"
          height={"48px"}
          width={"96%"}
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
        Create New Password
      </Button>
    </Flex>
  );
}
