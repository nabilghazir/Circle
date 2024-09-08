import { Box, Flex } from "@chakra-ui/react";
import { Nav } from "../features/navbar/nav";
import { HomePost } from "../features/content/home-post";
import { RightBar } from "../layout/rightbar";
import { theme } from "../theme/theme"


export function Base() {
    return (
        <Flex height={"100vh"} width={"100%"} bg={theme.background.gray}>
            <Box flex={0.5}>
                <Nav />
            </Box>
            <Box flex={2}>
                <HomePost />
            </Box>
            <Box flex={1.25}>
                <RightBar />
            </Box>

        </Flex>
    )
}