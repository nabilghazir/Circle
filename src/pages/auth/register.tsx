import { Flex, Text, Box } from "@chakra-ui/react";
import { RegisterForm } from "../../features/auth/component/register-form";
import { theme } from "../../theme/theme";
import { Redirect } from "../../../router/link";

export function RegisterPages() {
  return (
    <Box
      bg={theme.background.gray}
      width={"100%"}
      height={"100% "}
      display={"flex"}
      justifyContent={"center"}>
      <Flex
        direction="column"
        width={"550px"}
        height={"500px"}
        justifyContent={"center"}
      >
        <Text
          color={theme.colors.green}
          as="h1"
          textAlign="left"
          justifyContent={"start"}
          margin="0"
          fontSize={"40px"}
          fontWeight={"700"}>
          circle
        </Text>
        <Text
          color={theme.colors.white}
          as="h2"
          textAlign="left"
          fontSize={"40px"}
          fontWeight={"700"}
          marginBottom={"40px"}>
          Create account Circle
        </Text>
        <RegisterForm />
        <Text
          color={theme.colors.white}
          textAlign="left"
          marginTop={"20px"}>
          Already have an account? <Redirect
            color={theme.colors.green}
            to="/login">Login</Redirect>
        </Text>
      </Flex>
    </Box>
  );
}
