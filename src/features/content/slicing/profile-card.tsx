import { Avatar, Image, Button, Card, CardHeader, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { theme } from "../../../theme/theme"
import { EditProfileModal } from "../modal/edit-profile"


export function ProfileCard() {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Card
            bg={theme.background.card}
            width={"100%"}
            padding={"25px"}
            gap={"10px"}>

            <CardHeader>
                <Text
                    as={"h1"}
                    fontWeight={"700"}
                    textAlign="left"
                    color={theme.colors.white}
                >My Profile
                </Text>
            </CardHeader>

            <Image
                bg="url(https://bit.ly/dan-abramov)"
                borderRadius={"10px"}
                width={"100%"}
                height={"100px"}
                marginBottom={"45px"}>
            </Image>

            <Flex
                justifyContent={"space-between"}
                alignItems={"end"}
                top={"165px"}
                position={"absolute"}
                width={"88%"}
                paddingX={"10px"}>

                <Avatar
                    src="https://bit.ly/dan-abramov"
                    width={"80px"}
                    height={"80px"}
                    border={"4px solid"} />

                <Button
                    borderRadius={"100px"}
                    bg={"none"}
                    border={"1px solid"}
                    color={theme.colors.white}
                    padding={"10px"}
                    onClick={onOpen}>
                    Edit Profile
                </Button>
            </Flex>

            <Text
                as={"h2"}
                textAlign="left"
                color={theme.colors.white}>
                Stella Audhina
            </Text>

            <Text
                as={"h3"}
                _disabled={"true"}
                textAlign="left"
                color={theme.colors.grey}>
                @audhina_afh
            </Text>

            <Text
                as={"p"}
                color={theme.colors.white}>
                picked over by the worms, and weird fishes
            </Text>

            <Flex
                gap={"10px"}>
                <Text
                    as={"p"}
                    color={theme.colors.white}
                >291 <Text as={"span"} color={theme.colors.grey}> Following</Text></Text>

                <Text
                    as={"p"}
                    color={theme.colors.white}
                >1.2K <Text as={"span"} color={theme.colors.grey}> Followers</Text></Text>
            </Flex>
            <EditProfileModal isOpen={isOpen} onClose={onClose} />
        </Card>
    )
}