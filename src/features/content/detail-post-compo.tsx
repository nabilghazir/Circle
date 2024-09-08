import { Avatar, Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { theme } from "../../theme/theme";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCircle, FaRegHeart } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { LuImagePlus } from "react-icons/lu";


export function DetailPostContent() {

    return (
        <Box borderX={"1px solid"} borderColor={theme.border.gray} height={"100vh"}  >
            <Text as={"h1"} color={theme.colors.white} display={"flex"} alignItems={"center"} gap={"5px"} fontSize={"25px"} fontWeight={"900"} padding={"20px"}>
                <IoIosArrowRoundBack />
                Status
            </Text>
            <Flex direction={"column"} borderBottom={"1px solid"} borderColor={theme.border.gray} paddingX={"20px"} paddingBottom={"20px"}>
                <Flex>
                    <Avatar src={"https://bit.ly/dan-abramov"} />
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
                <FormControl gap={"10px"} display={"flex"} alignItems={"center"}>
                    <Input placeholder="What is happening?!" border={"none"} >
                    </Input>
                    <Box>
                        <Input
                            type="file"
                            id="file-upload"
                            display="none"
                        />
                        <label htmlFor="file-upload">
                            <LuImagePlus fontSize={"25px"} color={theme.colors.green}></LuImagePlus>
                        </label>
                    </Box>
                </FormControl>
                <Button borderRadius={"100px"} padding={"10px"} bg={theme.colors.green} width={"100px"} height={"30px"} color={theme.colors.white}>
                    Post
                </Button>
            </Flex>
            <Flex padding={"20px"} gap={"10px"} borderBottom={"1px solid"} borderColor={theme.border.gray}>
                <Avatar src={"https://bit.ly/dan-abramov"} boxSize={"40px"} />
                <Flex direction={"column"}>
                    <Text
                        display={"flex"}
                        as={"h2"}
                        color={theme.colors.white}
                        alignItems={"flex-start"}
                        gap={"5px"}>
                        Indah Pra Karya
                        <Text
                            as={"span"}
                            color={theme.colors.grey}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"5px"}> @indahpra <FaCircle fontSize={"5px"} /> count </Text>
                    </Text>
                    <Text
                        marginTop={"10px"}
                        color={theme.colors.white}
                        fontSize={"14px"}
                        as={"p"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsum quaerat, aut, illum odio esse optio consectetur laborum nemo iste veritatis modi ab repellat ratione eos aliquam rem doloremque quam.</Text>
                    <Text
                        color={theme.colors.grey}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"5px"}
                        marginTop={"10px"}>
                        <FaRegHeart /> 36 <BiMessageDetail /> 381 Replies
                    </Text>
                </Flex>
            </Flex>


        </Box >
    )
}