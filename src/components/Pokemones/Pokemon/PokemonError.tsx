import React, { FC, PropsWithChildren } from "react";

import { Alert, AlertTitle } from "@mui/material";

const PokemonError: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {children}
        </Alert>
    );
};

export default PokemonError;
