import { Box, Flex } from "@chakra-ui/react";
import { Nav } from "../../features/navbar/nav";
import { RightBar } from "../../layout/right-bar";
import { theme } from "../../theme/theme"
import { DetailPostContent } from "../../features/content/slicing/detail-post-compo"


export function DetailPost() {
    return (
        <Flex height={"100vh"} width={"100%"} bg={theme.background.gray}>
            <Box flex={0.5}>
                <Nav />
            </Box>
            <Box flex={2}>
                <DetailPostContent />
            </Box>
            <Box flex={1.25}>
                <RightBar />
            </Box>
        </Flex >
    )
}