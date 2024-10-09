import { Box, Flex, Button, ListItem, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { TbUserSearch } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { theme } from "../../theme/theme"
import { BiLogOut } from "react-icons/bi";
import { PostModal } from "../content/modal/create-post";
import { Redirect } from "../../../router/link"
import { CgProfile } from "react-icons/cg";
import { UseLogout } from "../content/hooks/logout";





export function Nav() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const logout = UseLogout

    return (
        <Flex flexDirection={"column"}
            height={"100%"}>
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
                    <ListItem>
                        <Redirect
                            gap={"5px"}
                            color={theme.colors.white}
                            alignItems={"center"}
                            textDecoration={"none"}
                            display={"flex"}
                            to="/">
                            <RiHome7Fill />
                            Home
                        </Redirect>
                    </ListItem>

                    <ListItem>
                        <Redirect
                            gap={"5px"}
                            color={theme.colors.white}
                            alignItems={"center"}
                            textDecoration={"none"}
                            display={"flex"}
                            to="/search">
                            <TbUserSearch />
                            Search
                        </Redirect>
                    </ListItem>

                    <ListItem>
                        <Redirect
                            gap={"5px"}
                            color={theme.colors.white}
                            alignItems={"center"}
                            textDecoration={"none"}
                            display={"flex"}
                            to="/follow">
                            <CiHeart />
                            Follow
                        </Redirect>
                    </ListItem>

                    <ListItem>
                        <Redirect
                            gap={"5px"}
                            color={theme.colors.white}
                            alignItems={"center"}
                            textDecoration={"none"}
                            display={"flex"}
                            to="/profile">
                            <CgProfile />
                            Profile
                        </Redirect>
                    </ListItem>

                    <ListItem
                        gap={"5px"}
                        color={theme.colors.white}
                        alignItems={"center"}
                        textDecoration={"none"}
                        display={"flex"}
                    >
                        <Button
                            mt={"10px"}
                            width={"100%"}
                            marginRight={"15px"}
                            bg={theme.colors.green}
                            _hover={{ bg: theme.buttons.after }}
                            color={theme.colors.white}
                            onClick={onOpen}>
                            Create Post
                        </Button>
                    </ListItem>
                </UnorderedList>
            </Box >
            <Text
                as="h1"
                color={theme.colors.white}
                display={"flex"}
                mt="250px"
                alignItems={"center"}
                gap={"10px"}
                marginLeft={"20px"}>
                <Redirect
                    onClick={logout}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                    to={""}
                    marginBottom={"20px"}>
                    <BiLogOut /> Logout
                </Redirect>
            </Text >

            <PostModal isOpen={isOpen} onClose={onClose} />
        </Flex >
    );
}