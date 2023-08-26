import React, { FC } from "react";

import { Box, Container } from "@mui/material";

import Header from "./Header";
import Pokemones from "./Pokemones/Pokemones";

const App: FC = () => {
    return (
        <Box sx={{ paddingY: { xl: "100px", xs: "20px" } }}>
            <Container maxWidth="lg">
                <Header />
                <Box
                    component="main"
                    sx={{ paddingTop: { lg: "44px", xs: "20px" } }}
                >
                    <Pokemones />
                </Box>
            </Container>
        </Box>
    );
};

export default App;
