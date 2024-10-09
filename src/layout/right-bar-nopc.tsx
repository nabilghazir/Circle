import { Flex, Box } from "@chakra-ui/react";
import { SuggestedCard } from "../features/content/slicing/suggested-card";
import { MetaCard } from "../features/content/slicing/meta-card";

export function RightBarNoPc() {
    return (
        <Flex justifyContent={"center"} padding={"40px"} flexDirection={"column"} gap={"20px"}>
            <Box>
                <SuggestedCard />
            </Box>
            <Box>
                <MetaCard />
            </Box>
        </Flex>
    )
}