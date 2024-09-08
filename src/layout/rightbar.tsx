import { Flex, Box } from "@chakra-ui/react";
import { ProfileCard } from "../features/content/profile-card";
import { SuggestedCard } from "../features/content/suggested-card";
import { MetaCard } from "../features/content/meta-card";





export function RightBar() {

    return (
        <Flex justifyContent={"center"} padding={"40px"} flexDirection={"column"} gap={"20px"}>
            <Box>
                <ProfileCard />
            </Box>
            <Box>
                <SuggestedCard />
            </Box>
            <Box>
                <MetaCard />
            </Box>
        </Flex>
    )
}