import { Flex, Box } from "@chakra-ui/react";
import { SearchNotFound } from "../../features/content/slicing/search-not-found";
import { Nav } from "../../features/navbar/nav";
import { RightBar } from "../../layout/right-bar";
import { theme } from "../../theme/theme"


export function SearchNotFoundPage() {

    return (
        <Flex
            height={"100%"}
            width={"100%"}
            bg={theme.background.gray}>
            <Box flex={0.5}>
                <Nav />
            </Box>
            <Box flex={2}>
                <SearchNotFound />
            </Box>
            <Box flex={1.25}>
                <RightBar />
            </Box>
        </Flex >
    )
}