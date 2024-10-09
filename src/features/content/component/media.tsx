import { Grid, Image } from "@chakra-ui/react";

export function Media() {
    return (
        <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={1}
            padding={"20px"}
        >
            <Image />

        </Grid>
    );
}
