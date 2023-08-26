import React, { FC } from "react";

import { Box, CircularProgress } from "@mui/material";

const PokemonLoading: FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default PokemonLoading;
