import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { theme } from "../../../theme/theme";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCircle, FaRegHeart } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { Post } from "../component/post/create-post";
import { Thread } from "../component/post/home-post";


export function DetailPostContent() {

    return (
        <Box borderX={"1px solid"} borderColor={theme.border.gray} height={"100vh"}>

            <Text
                as={"h1"}
                color={theme.colors.white}
                display={"flex"}
                alignItems={"center"
                } gap={"5px"}
                fontSize={"25px"}
                fontWeight={"900"}
                padding={"20px"}>
                <IoIosArrowRoundBack />
                Status
            </Text>

            <Flex direction={"column"} borderBottom={"1px solid"} borderColor={theme.border.gray} paddingX={"20px"} paddingBottom={"20px"}>
                <Flex>
                    <Avatar src={"https://bit.ly/dan-abramov"} marginRight={"10px"} />
                    <Flex direction={"column"}>
                        <Text color={theme.colors.white}>Indah Pra Karya</Text>
                        <Text color={theme.colors.grey}>@indahpra</Text>
                    </Flex>
                </Flex>
                <Text color={theme.colors.white} fontSize={"15px"} marginTop={"10px"}>
                    Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja gitu. Ada aja jalannya</Text>
                <Text color={theme.colors.grey} display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"10px"}>
                    11:32 <FaCircle fontSize={"5px"} /> Jul 26, 2023
                </Text>
                <Text color={theme.colors.grey} display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"10px"}>
                    <FaRegHeart /> 36 <BiMessageDetail /> 381 Replies
                </Text>
            </Flex>

            <Flex alignItems={"center"} gap={"10px"} padding={"20px"} borderBottom={"1px solid"} borderColor={theme.border.gray}>
                <Avatar
                    width={"40px"}
                    height={"40px"}
                    boxSize='40px'
                    src='https://bit.ly/dan-abramov'
                />
                <Post />
            </Flex>

            <Box borderBottom={"1px solid"} color={theme.border.gray}>
                <Thread />
            </Box>
        </Box >
    )
}