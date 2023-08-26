import React, { FC } from "react";

import { CircularProgress } from "@mui/material";

const PokemonesNamesLoading: FC = () => {
    return <CircularProgress sx={{ margin: "0 auto" }} />;
};

export default PokemonesNamesLoading;
