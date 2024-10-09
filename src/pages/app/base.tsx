import { Box, Flex } from "@chakra-ui/react";
import { Nav } from "../../features/navbar/nav";
import { RightBar } from "../../layout/right-bar";
import { theme } from "../../theme/theme"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/use-store";
import { RightBarNoPc } from "../../layout/right-bar-nopc";
import { RightBarNoFollow } from "../../layout/right-bar-nof";

export function Base() {
    const User = useAppSelector((state) => state.auth);
    const location = useLocation();

    if (!Object.keys(User).length) return <Navigate to={"/login"} />
    if (!User.id) return <Navigate to={"/login"} />

    const isProfilePage = location.pathname.includes('/profile');
    const isThesePage = location.pathname.includes('/follow') || location.pathname.includes('/search');

    return (
        <Flex height={"100vh"} width={"100vw"} bg={theme.background.gray}>
            <Box flex={0.75}>
                <Nav />
            </Box>
            <Box flex={2}>
                <Outlet />
            </Box>
            <Box flex={1.25}>
                {isProfilePage ? <RightBarNoPc /> : isThesePage ? <RightBarNoFollow /> : <RightBar />}
            </Box>

        </Flex>
    )
}