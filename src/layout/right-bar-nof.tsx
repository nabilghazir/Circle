import { Flex, Box } from "@chakra-ui/react";
import { ProfileCard } from "../features/content/slicing/profile-card";
import { MetaCard } from "../features/content/slicing/meta-card";



export function RightBarNoFollow() {

    return (
        <Flex justifyContent={"center"} padding={"40px"} flexDirection={"column"} gap={"20px"}>
            <Box>
                <ProfileCard />
            </Box>
            <Box>
                <MetaCard />
            </Box>
        </Flex>
    )
}