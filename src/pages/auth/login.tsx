import { LoginForm } from "../../features/auth/component/login-form";
import { Box, Flex, Text } from "@chakra-ui/react";
import { theme } from "../../theme/theme";
import { Redirect } from "../../../router/link";

export function LoginPages() {
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
          Login to Circle
        </Text>
        <LoginForm />
        <Text as="p"
          textAlign="left"
          color={theme.colors.white}
          fontWeight={"600"}
          marginTop={"20px"}>
          Dont have an account yet?
          <Redirect
            to={"/register"}
            color={theme.colors.green}
            marginLeft={"5px"}>Create an account.</Redirect>
        </Text>
      </Flex>
    </Box>
  );
}
