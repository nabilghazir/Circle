import { Avatar, Box, Flex, Text, Button } from "@chakra-ui/react";
import { theme } from "../../../theme/theme";

export function Users() {
    return (
        <Flex alignItems="center" padding={"20px"}>

            <Avatar name="John Doe" src="https://bit.ly/broken-link" />


            <Box
                marginLeft={"20px"}
                flex="1">
                <Text color={theme.colors.white} fontWeight={"700"}>Diaz gaming</Text>
                <Text color={theme.colors.grey}>@hdiaz</Text>
                <Text color={theme.colors.white}>Mobile legend adalah motivasi ku</Text>
            </Box>

            <Button
                borderRadius={"100px"}
                bg={"none"}
                border={"1px solid"}
                color={theme.colors.white}
                padding={"15px"}>
                Follow
            </Button>
        </Flex>
    );
}
