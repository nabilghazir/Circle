import { useState } from 'react';
import {
    Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, ModalBody, Image, Avatar, Input, Text, ModalHeader, Box, FormControl, FormLabel, Flex,
    Textarea
} from "@chakra-ui/react";
import { ModalProps } from "./modal-type";
import { theme } from "../../../theme/theme";
import { LuImagePlus } from "react-icons/lu";

export function EditProfileModal({ isOpen, onClose }: ModalProps) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent
                padding={"20px"}
                bg={theme.background.gray}
                maxWidth={"700px"}
            >
                <ModalCloseButton
                    border={"1px solid"}
                    color={theme.colors.grey}
                    borderRadius={"100px"}
                    width={"5px"}
                    height={"5px"}
                    padding={"10px"}
                />

                <ModalHeader>
                    <Text
                        as={"h1"}
                        color={theme.colors.white}
                    >
                        Edit Profile
                    </Text>
                </ModalHeader>

                <ModalBody
                    borderBottom={"1px solid"}
                    borderColor={theme.border.gray}
                >
                    <Image
                        bg={"url(https://bit.ly/dan-abramov)"}
                        borderRadius={"10px"}
                        width={"100%"}
                        height={"150px"}
                        marginBottom={"45px"}
                    />
                    <Box
                        position={"relative"}
                        width={"80px"}
                        height={"80px"}
                        bottom={"80px"}
                        marginLeft={"15px"}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <Avatar
                            src={"https://bit.ly/dan-abramov"}
                            width={"100%"}
                            height={"100%"}
                            border={"3.5px solid"}
                        />
                        <FormControl
                            position={"absolute"}
                            top={"0"}
                            left={"0"}
                            width={"100%"}
                            height={"100%"}
                            opacity={isHovering ? 1 : 0}
                            transition={"opacity 0.2s"}
                            pointerEvents={isHovering ? "auto" : "none"}
                        >
                            <FormLabel
                                display={"flex"}
                                fontSize={"30px"}
                                cursor={"pointer"}
                                color={"home.button.hoverText"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                width={"100%"}
                                height={"100%"}
                                margin={"0"}
                                backgroundColor={"rgba(0,0,0,0.5)"}
                                borderRadius={"full"}
                            >
                                <Box
                                    bg={"#323232"}
                                    color={"white"}
                                    padding={"7px"}
                                    fontSize={"20px"}
                                    borderRadius={"full"}
                                >
                                    <LuImagePlus />
                                </Box>
                            </FormLabel>
                            <Input type="file" hidden />
                        </FormControl>
                    </Box>


                    <Flex direction="column" gap="20px">
                        <FormControl>
                            <FormLabel color={theme.colors.white}>Name</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your name"
                                color={theme.colors.white}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel color={theme.colors.white}>Username</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your username"
                                color={theme.colors.white}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel color={theme.colors.white}>Bio</FormLabel>
                            <Textarea
                                placeholder="Enter your bio"
                                color={theme.colors.white}
                            />
                        </FormControl>

                    </Flex>
                </ModalBody>

                <ModalFooter
                    display={"flex"}
                    justifyContent={"flex-end"}
                >
                    <Button
                        bg={theme.buttons.before}
                        color={theme.colors.grey}
                        fontWeight={"700"}
                        borderRadius={"100px"}
                    >
                        Post
                    </Button>
                </ModalFooter>

            </ModalContent>
        </Modal >
    );
}