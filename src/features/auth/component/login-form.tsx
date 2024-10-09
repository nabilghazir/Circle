import { UseLoginForm } from "../hooks/login-hooks";
import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { theme } from "../../../theme/theme"
import { Redirect } from "../../../../router/link";
import { ErrorMessage } from "../../../schemas/error";

export function LoginForm() {
  const { handleSubmit, onSubmit, errors, register } = UseLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="10px" >
        <FormControl isRequired>
          <Input
            type="text"
            placeholder="Username or Email *"
            {...register("username")}
            height={"48px"}
            width={"100%"}
            borderRadius={"10px"}
            padding={"0px 10px"}
            border={"1px solid #545454"}
            color={theme.colors.white}
            bg="transparent"
          />
          <ErrorMessage message={errors.username?.message} />
        </FormControl>
        <FormControl isRequired>
          <Input
            type="password"
            placeholder="Password *"
            height={"48px"}
            {...register("password")}
            width={"100%"}
            borderRadius={"10px"}
            padding={"0px 10px"}
            border={"1px solid #545454"}
            color={theme.colors.white}
            bg="transparent"
          />
          <ErrorMessage message={errors.password?.message} />
        </FormControl>
        <Flex
          justifyContent="flex-end">
          <Redirect
            to={"/forgot"}
            color={theme.colors.white}>
            Forgot Password?
          </Redirect>
        </Flex>
        <Button
          width={"100%"}
          type="submit"
          borderRadius={150}
          color={theme.colors.white}
          bg={theme.buttons.after}>
          Login
        </Button>
      </Flex>
    </form>
  );
}
