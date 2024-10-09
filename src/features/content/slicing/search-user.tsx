import { Box } from "@chakra-ui/react";
import { theme } from "../../../theme/theme";
import { SearchBar } from "../component/search-bar";
import { Users } from "../component/users";




export function SearchUser() {


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
            <Users />

        </Box >
    )
}