import { Box, FormControl, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { theme } from "../../../theme/theme"
import { MdOutlinePersonSearch } from "react-icons/md";

export function SearchBar() {
    return (
        <Box>
            <FormControl>
                <InputGroup
                    border={"none"}
                    borderRadius={"100px"}
                    bg={theme.border.gray}
                >
                    <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlinePersonSearch color={theme.colors.grey} fontSize={"25px"} />}
                        borderRadius={"100px"}
                    />
                    <Input
                        placeholder="Search"
                        id="search"
                        borderRadius={"100px"}
                    />
                </InputGroup>
            </FormControl>
        </Box>
    );
}
