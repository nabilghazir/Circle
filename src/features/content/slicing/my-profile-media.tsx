import { Box, Tabs, TabList, Tab, } from "@chakra-ui/react";
import { Profile } from "../component/profile";
import { theme } from "../../../theme/theme"
import { Media } from "../component/media";



export function ProfileMedia() {

    return (
        <Box
            height={"100vh"}
            borderX={"1px solid"}
            borderColor={theme.border.gray}>

            <Box borderBottom={"1px solid"} color={theme.border.gray}>
                <Profile />
                <Tabs borderBottom={"1px solid"} borderColor={theme.border.gray}>
                    <TabList display={"flex"} justifyContent={"center"}>
                        <Tab width={"45%"}
                            border={"none"}
                            color={theme.colors.white}
                            borderBottom={"3px solid theme.colors.green"}>
                            All Post
                        </Tab>
                        <Tab
                            width={"45%"}
                            border={"none"}
                            color={theme.colors.green}
                            borderBottom={"3px solid"}>
                            Media
                        </Tab>
                    </TabList>
                </Tabs>
            </Box>
            <Media />


        </Box >
    )
}