import { Card, Text, Flex, Avatar, Button } from "@chakra-ui/react";
import { theme } from "../../theme/theme"


export function SuggestedCard() {

    return (
        <Card padding={"20px"} bg={theme.background.card}>
            <Text as={"h1"} marginBottom={"20px"} color={theme.colors.white}>
                Suggested For You
            </Text>

            <Flex justifyContent={"space-between"}>
                <Flex gap={"15px"}>
                    <Avatar src="https://bit.ly/dan-abramov" />
                    <Flex flexDirection={"column"}>
                        <Text as={"h2"} color={theme.colors.white} > Mohammad Jawahir</Text>
                        <Text as={"p"} color={theme.colors.grey}>@em.Jawahir</Text>
                    </Flex>
                </Flex>
                <Button borderRadius={"100px"} bg={"none"} border={"1px solid"} color={theme.colors.white} padding={"10px"}>
                    Follow
                </Button>
            </Flex>

        </Card>
    )
}