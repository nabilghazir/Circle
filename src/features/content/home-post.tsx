import { Box, Text, Flex, Avatar, Input, FormControl, Button } from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import { theme } from "../../theme/theme";
import { FaCircle, FaRegHeart } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";

export function HomePost() {
    return (
        <Box borderLeft={"1px solid"}
            borderRight={"1px solid"}
            borderBottom={"1px solid"}
            borderColor={theme.border.gray}
            alignItems={"center"}
            height={"100vh"}>
            <Box
                borderBottom={"1px solid"}
                padding={"20px"}
                color={theme.border.gray}>
                <Text
                    as="h1"
                    textAlign="left"
                    color={theme.colors.white}
                    fontSize={"30px"}
                    fontWeight={"bold"}
                    marginBottom={"20px"} >
                    Home
                </Text >
                <Flex alignItems={"center"} gap={"10px"}>
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
            </Box>
            <Flex padding={"20px"} gap={"10px"}>
                <Avatar src={"https://bit.ly/dan-abramov"} boxSize={"40px"} />
                <Flex direction={"column"}>
                    <Text display={"flex"} as={"h2"} color={theme.colors.white} alignItems={"flex-start"} gap={"5px"}>
                        Indah Pra Karya <Text as={"span"} color={theme.colors.grey} display={"flex"} alignItems={"center"} gap={"5px"}> @indahpra <FaCircle fontSize={"5px"} /> count </Text>
                    </Text>
                    <Text marginTop={"10px"} color={theme.colors.white} fontSize={"14px"} as={"p"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsum quaerat, aut, illum odio esse optio consectetur laborum nemo iste veritatis modi ab repellat ratione eos aliquam rem doloremque quam.</Text>
                    <Text color={theme.colors.grey} display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"10px"}>
                        <FaRegHeart /> 36 <BiMessageDetail /> 381 Replies
                    </Text>
                </Flex>
            </Flex>
        </Box >
    )
}