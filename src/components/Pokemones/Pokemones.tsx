import React, { FC, useState } from "react";

import { Grid } from "@mui/material";

import { Pokemon } from "components/Pokemones/Pokemon";
import { PokemonesNames } from "components/Pokemones/PokemonesNames";

const Pokemones: FC = () => {
    const [activeName, setActiveName] = useState<string | null>(null);

    return (
        <Grid
            container
            columnSpacing="12px"
            rowSpacing="24px"
            minHeight="508px"
            direction={{ lg: "row", xs: "column" }}
        >
            <Grid item xs={6} display="flex" alignItems="center">
                <PokemonesNames
                    onClick={(name: string) => setActiveName(name)}
                />
            </Grid>
            <Grid item xs={6}>
                {activeName && <Pokemon name={activeName} />}
            </Grid>
        </Grid>
    );
};

export default Pokemones;
