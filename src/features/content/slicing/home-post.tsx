import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { theme } from "../../../theme/theme";
import { Thread } from "../component/post/home-post";
import { Post } from "../component/post/create-post";
import { UseUser } from "../hooks/user";


export function HomePost() {

    const { data } = UseUser();

    return (
        <Box
            borderLeft={"1px solid"}
            borderRight={"1px solid"}
            borderBottom={"1px solid"}
            borderColor={theme.border.gray}
            alignItems={"center"}
            height={"100%"}>
            <Box
                borderBottom={"1px solid"}
                padding={"20px"}
                color={theme.border.gray}>
                <Text
                    as="h1"
                    textAlign="left"
                    color={theme.colors.white}
                    fontSize={"30px"}
                    fontWeight={"bold"}
                    marginBottom={"20px"} >
                    Home
                </Text >
                <Flex width={"100%"} gap={"20px"}>
                    <Avatar
                        width={"40px"}
                        height={"40px"}
                        boxSize='40px'
                        src={data?.image}
                    />
                    <Post />
                </Flex>
            </Box>
            <Box borderBottom={"1px solid"} color={theme.border.gray}>
                <Thread />
            </Box>
        </Box >
    )
}