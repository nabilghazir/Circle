import { Flex, Avatar, Text } from "@chakra-ui/react";
import { BiMessageDetail } from "react-icons/bi";
import { FaCircle, FaRegHeart } from "react-icons/fa";
import { theme } from "../../../../theme/theme"
import { useParams } from "react-router-dom";
import { UsePostDetail } from "../../hooks/status";
import { format } from 'date-fns';
import { useAllPost } from "../../hooks/all-post";



export function Thread() {
    const { data } = useAllPost()



    return (
        <>
            {data?.map((post) => {
                return (
                    <Flex
                        padding={"20px"}
                        gap={"10px"}
                        borderBottom={"10px solid theme.border.gray"}
                        className={`${post.id}`}
                    >

                        <Avatar
                            src={post.author.image}
                            boxSize={"40px"} />

                        <Flex
                            direction={"column"}>

                            <Text
                                display={"flex"}
                                as={"h2"}
                                color={theme.colors.white}
                                alignItems={"flex-start"}
                                gap={"5px"}>
                                {post.author.fullname}
                                <Text as={"span"}
                                    color={theme.colors.grey}
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap={"5px"}> @{post.author.username}
                                    <FaCircle
                                        fontSize={"5px"} /> {post.timeAgo}
                                </Text>
                            </Text>
                            <Text
                                marginTop={"10px"}
                                color={theme.colors.white}
                                fontSize={"14px"}
                                as={"p"}>{post.content}
                            </Text>
                            <Text
                                color={theme.colors.grey}
                                display={"flex"}
                                alignItems={"center"}
                                gap={"5px"}
                                marginTop={"10px"}>
                                <FaRegHeart />{post.likesCount} <BiMessageDetail /> {post.repliesCount}
                            </Text>
                        </Flex>
                    </Flex>
                )
            })}
        </>
    )
}