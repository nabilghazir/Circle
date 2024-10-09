import { Avatar, Image, Button, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { theme } from "../../../theme/theme"



export function Profile() {
    return (
        <>
            <Text
                padding={"20px"}
                as={"h1"}
                color={theme.colors.white}
                display={"flex"}
                alignItems={"center"}
                fontSize={"20px"}
                fontWeight={"900"}
            >
                <IoIosArrowRoundBack />
                ✨ Stella Audhina ✨
            </Text>
            <Image
                src={"https://static.vecteezy.com/system/resources/thumbnails/016/704/991/small/abstract-pastel-gradient-color-background-with-blank-blur-and-smooth-vector.jpg"}
                width={"100%"}
                padding={"20px"}
                height={"160px"}
                borderRadius={"25px"}
            />
            <Flex
                justifyContent={"space-between"}
                padding={"20px"}
                position={"absolute"}
                alignItems={"center"}
                width={"750px"}
                top={"142.5px"}>

                <Avatar
                    src={"https://bit.ly/dan-abramov"}
                    width={"90px"}
                    height={"90px"}
                    margin={"20px"}
                    border={"3px solid"}
                    marginBottom={"50px"} />

                <Button
                    borderRadius={"100px"}
                    bg={"none"}
                    border={"1px solid"}
                    color={theme.colors.white}>Edit Profile</Button>
            </Flex>

            <Text
                as={"h2"}
                color={theme.colors.white}
                paddingX={"15px"}
                marginTop={"50px"}
                fontSize={"22px"}
                fontWeight={"600"}
            >
                ✨ Stella Audhina ✨
            </Text>
            <Text
                as={"h3"}
                color={theme.colors.grey}
                paddingX={"20px"}>
                @audhinafh
            </Text>
            <Text
                as={"p"}
                color={theme.colors.white}
                paddingX={"20px"}
                fontSize={"14px"}>
                picked over by the worms, and weird fishes
            </Text>
            <Text
                as={"p"}
                display={"flex"}
                gap={"7.5px"}
                color={theme.colors.white}
                paddingX={"20px"}
                fontSize={"14px"}
            >
                291 <Text as={"span"} color={theme.colors.grey}>Following</Text>
                23 <Text as={"span"} color={theme.colors.grey}>Followers</Text>
            </Text>

        </>
    )
}