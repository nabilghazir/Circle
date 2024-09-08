import { Box, Flex, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { TbUserSearch } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { theme } from "../../theme/theme"
import { BiLogOut } from "react-icons/bi";




export function Nav() {
    return (
        <Flex flexDirection={"column"}>
            <Box >
                <Text as="h1" color={theme.colors.green} fontSize={"50px"} fontWeight={"bold"} marginLeft={"20px"} marginTop={"20px"} >circle</Text>
                <UnorderedList
                    gap={"30px"}
                    width={"235px"}
                    display={"flex"}
                    fontSize={"20px"}
                    color={"#FFFFFF"}
                    marginTop={"15px"}
                    listStyleType={"none"}
                    flexDirection={"column"}
                >
                    <ListItem
                        gap={"5px"}
                        color={theme.colors.white}
                        alignItems={"center"}
                        textDecoration={"none"}

                        display={"flex"}
                    >
                        <RiHome7Fill /> Home
                    </ListItem>

                    <ListItem
                        gap={"5px"}
                        color={theme.colors.white}
                        alignItems={"center"}
                        textDecoration={"none"}
                        display={"flex"}
                    >
                        <TbUserSearch /> Search
                    </ListItem>

                    <ListItem
                        gap={"5px"}
                        color={theme.colors.white}
                        alignItems={"center"}
                        textDecoration={"none"}
                        display={"flex"}
                    >
                        <CiHeart /> Follow
                    </ListItem>

                    <ListItem
                        gap={"5px"}
                        color={theme.colors.white}
                        alignItems={"center"}
                        textDecoration={"none"}
                        display={"flex"}
                    >
                        <Button mt={"10px"} width={"100%"} marginRight={"15px"} bg={theme.colors.green} _hover={{ bg: theme.buttons.after }} color={theme.colors.white}>
                            Create Post
                        </Button>
                    </ListItem>
                </UnorderedList>
            </Box >
            <Text as="h1" color={theme.colors.white} display={"flex"} mt="350px" alignItems={"center"} gap={"10px"} marginLeft={"20px"}>
                <BiLogOut /> Logout
            </Text >
        </Flex >
    );
}
