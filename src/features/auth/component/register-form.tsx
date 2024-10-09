import { useRegisterForm } from "../hooks/register-hooks";
import { theme } from "../../../theme/theme";
import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { ErrorMessage } from "../../../schemas/error";


export function RegisterForm() {
  const { handleSubmit, onSubmit, errors, register } = useRegisterForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="10px">
        <FormControl isRequired>
          <Input
            type="text"
            placeholder="Fullname *"
            {...register("fullname")}
            height={"48px"}
            width={"100%"}
            color={theme.colors.white}
            borderRadius={"10px"}
            padding={"0px 10px"}
            border={"1px solid #545454"}
            bg="transparent"
          />
          <ErrorMessage message={errors.fullname?.message} />
        </FormControl>
        <FormControl isRequired>
          <Input
            type="email"
            placeholder="Email *"
            {...register("email")}
            height={"48px"}
            width={"100%"}
            color={theme.colors.white}
            borderRadius={"10px"}
            padding={"0px 10px"}
            border={"1px solid #545454"}
            bg="transparent"
          />
          <ErrorMessage message={errors.email?.message} />
        </FormControl>
        <FormControl isRequired>
          <Input
            type="password"
            placeholder="Password *"
            {...register("password")}
            height={"48px"}
            width={"100%"}
            color={theme.colors.white}
            borderRadius={"10px"}
            padding={"0px 10px"}
            border={"1px solid #545454"}
            bg="transparent"
          />
          <ErrorMessage message={errors.password?.message} />
        </FormControl>
        <Button
          width={"100%"}
          type="submit"
          borderRadius={150}
          color={theme.colors.white}
          bg={theme.colors.green}>
          Register
        </Button>
      </Flex>
    </form>
  );
}
