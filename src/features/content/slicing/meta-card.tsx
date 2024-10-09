import { Card, Flex, Text, Image, Box } from "@chakra-ui/react";
import { FaCircle, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { theme } from "../../../theme/theme"


export function MetaCard() {
    return (
        <Card
            padding={"20px"}
            bg={theme.background.card}>
            <Flex>
                <Text
                    display={"flex"}
                    alignItems={"center"}
                    gap={"5px"}
                    color={theme.colors.white}>
                    Developed by Nabil Ghazi  <Box as={FaCircle} fontSize={"7.5px"} mx={"5px"} />
                </Text>
                <Text
                    display={"flex"}
                    alignItems={"center"}
                    gap={"5px"}
                    color={theme.colors.white}>
                    <FaGithub />
                    <FaLinkedin />
                    <FaFacebook />
                    <BiLogoInstagramAlt />
                </Text>
            </Flex>

            <Text
                display={"flex"}
                fontSize={"11px"}
                alignItems={"center"}
                color={theme.colors.grey}>
                Powered by
                <Image
                    alignItems={"center"}
                    mx={"5px"}
                    width={"20px"}
                    height={"15px"}
                    src={"https://dumbways.id/assets/images/brandred.png"}></Image>
                DumbwaysIndonesia
                <Box
                    as={FaCircle}
                    fontSize={"7.5px"}
                    mx={"5px"} />  #1 Coding Bootcamp
            </Text>

        </Card>
    )
}