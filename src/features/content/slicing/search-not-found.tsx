import { Box } from "@chakra-ui/react";
import { theme } from "../../../theme/theme"
import { SearchBar } from "../component/search-bar";
import { UserNotFound } from "../component/no-user";


export function SearchNotFound() {

    return (
        <Box
            height={"100vh"}
            borderX={"1px solid"}
            borderColor={theme.border.gray}
            paddingX={"20px"}>

            <Box
                paddingY={"20px"}>
                <SearchBar />
            </Box>
            <UserNotFound />
        </Box >
    )
}