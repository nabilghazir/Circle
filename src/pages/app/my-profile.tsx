import { Flex, Box } from "@chakra-ui/react";
import { MyProfile } from "../../features/content/slicing/my-profile";
import { Nav } from "../../features/navbar/nav";
import { RightBar } from "../../layout/right-bar";
import { theme } from "../../theme/theme"


export function MyProfilePage() {

    return (
        <Flex height={"100%"} width={"100%"} bg={theme.background.gray}>
            <Box flex={0.5}>
                <Nav />
            </Box>
            <Box flex={2}>
                <MyProfile />
            </Box>
            <Box flex={1.25}>
                <RightBar />
            </Box>
        </Flex >
    )

}