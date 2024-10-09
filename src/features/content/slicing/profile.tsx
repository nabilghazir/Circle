import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { theme } from "../../../theme/theme"
import { Profile } from "../component/profile";
import { Thread } from "../component/post/home-post";
import { Media } from "../component/media";



export function OtherProfile() {
    return (
        <Box
            height={"100vh"}
            borderX={"1px solid"}
            borderColor={theme.border.gray}>

            <Box >
                <Profile />
                <Tabs variant={"unstyled"}>
                    <TabList display={"flex"} justifyContent={"center"}>
                        <Tab width={"45%"}
                            border={"none"}
                            textColor={theme.colors.white}>
                            All Post
                        </Tab>
                        <Tab
                            width={"45%"}
                            textColor={theme.colors.white}>
                            Media
                        </Tab>
                    </TabList>
                    <TabIndicator height='2px' bg={theme.colors.green} borderRadius='1px' />
                    <TabPanels>
                        <TabPanel>
                            <Thread />
                        </TabPanel>
                        <TabPanel>
                            <Media />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>


        </Box >
    )
}