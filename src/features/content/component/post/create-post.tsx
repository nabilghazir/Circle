import { Flex, FormControl, Input, Box, Button, Spinner } from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import { theme } from "../../../../theme/theme"
import { usePost } from "../../hooks/post";
import { ErrorMessage } from "../../../../schemas/error";



export function Post() {
    const { register, handleSubmit, errors, onSubmit, isSubmitting } = usePost();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data">
            <Flex
                alignItems={"center"}
                gap={"20px"}
                width={"700px"}>
                <FormControl
                    gap={"10px"}
                    display={"flex"}
                    alignItems={"center"}>
                    <Input
                        placeholder="What is happening?!"
                        border={"none"}
                        type={"text"}
                        {...register("content")}
                        width={"100%"} />
                    <ErrorMessage message={errors.content?.message} />
                    <Box>
                        <Input
                            type="file"
                            id="file-upload"
                            {...register("image")}
                            display="none"
                        />
                        <ErrorMessage message={errors.image?.message} />
                        <label
                            htmlFor="file-upload">
                            <LuImagePlus
                                fontSize={"25px"}
                                color={theme.colors.green}></LuImagePlus>
                        </label>
                    </Box>
                </FormControl>
                <Button
                    type={"submit"}
                    disabled={isSubmitting}
                    borderRadius={"100px"}
                    padding={"10px"}
                    bg={theme.colors.green}
                    width={"100px"}
                    height={"30px"}
                    color={theme.colors.white}>
                    {isSubmitting ? <Spinner size="sm" /> : "Post"}
                </Button>
            </Flex>
        </form>
    )
}