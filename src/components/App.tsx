import React, { FC } from "react";

import { Box, Container } from "@mui/material";

import theme from "libs/theme";

import Header from "./Header";
import Pokemones from "./Pokemones";

console.log(theme);

const App: FC = () => {
    return (
        <Box sx={{ paddingY: "100px" }}>
            <Container maxWidth="lg">
                <Header />
                <Box component="main" paddingTop="44px">
                    <Pokemones />
                </Box>
            </Container>
        </Box>
    );
};

export default App;
