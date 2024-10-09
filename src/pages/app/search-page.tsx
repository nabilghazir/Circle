import { Flex, Box } from "@chakra-ui/react";
import { Nav } from "../../features/navbar/nav";
import { RightBar } from "../../layout/right-bar";
import { theme } from "../../theme/theme";
import { SearchUser } from "../../features/content/slicing/search-user";



export function SearchUserPage() {

    return (
        <Flex
            height={"100%"}
            width={"100%"}
            bg={theme.background.gray}>
            <Box flex={0.5}>
                <Nav />
            </Box>
            <Box flex={2}>
                <SearchUser />
            </Box>
            <Box flex={1.25}>
                <RightBar />
            </Box>
        </Flex >
    )
}