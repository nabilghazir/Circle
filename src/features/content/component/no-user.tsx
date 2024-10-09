import { Text, Flex } from "@chakra-ui/react";
import { theme } from "../../../theme/theme";



export function UserNotFound() {


    return (
        <Flex
            flexDir={"column"}
            height={"670px"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Text
                color={theme.colors.white}
                fontWeight={"700"}
                fontSize={"20px"}>
                No Result for "user not found"
            </Text>
            <Text
                color={theme.colors.grey}>
                Try searching for something else or check the spelling of what you typed.
            </Text>
        </Flex>
    )
}