import { Button, Modal, ModalOverlay, ModalContent, Textarea, ModalCloseButton, ModalFooter, FormControl, ModalBody, Avatar, Input } from "@chakra-ui/react"
import { ModalProps } from "./modal-type"
import { theme } from "../../../theme/theme"
import { LuImagePlus } from "react-icons/lu"



export function PostModal({ isOpen, onClose }: ModalProps) {
    return (
        <>
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
                >

                    <ModalCloseButton
                        border={"1px solid "}
                        color={theme.colors.grey}
                        borderRadius={"100px"}
                        width={"5px"}
                        height={"5px"}
                        padding={"10px"} />

                    <ModalBody
                        borderBottom={"1px solid"}
                        borderColor={theme.border.gray}>
                        <FormControl display={"flex"} justifyContent={"space-between"}>
                            <Avatar
                                src=" https://bit.ly/broken-link" />
                            <Textarea
                                width="100%"
                                resize="none"
                                color="white"
                                height={"150px"}
                                border="1px solid transparent"
                                placeholder="What Is Happening?!"
                                _focusVisible={{
                                    borderColor: "transparent",
                                }}
                                _hover={{
                                    borderColor: "transparent",
                                }} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter
                        display={"flex"}
                        justifyContent={"space-between"}>
                        <Input
                            type="file"
                            id="file-upload"
                            display="none"
                        />
                        <label htmlFor="file-upload">
                            <LuImagePlus
                                fontSize={"25px"}
                                color={theme.colors.green} />
                        </label>

                        <Button
                            bg={theme.buttons.before}
                            color={theme.colors.grey}
                            fontWeight={"700"}
                            borderRadius={"100px"}
                        >Post</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}