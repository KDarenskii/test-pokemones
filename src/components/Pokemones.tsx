import React, { FC } from "react";

import { Grid } from "@mui/material";

import PokemonCard from "./PokemonesCard/PokemonCard";
import PokemonesList from "./PokemonesList/PokemonesList";

const Pokemones: FC = () => {
    return (
        <Grid container spacing="12px">
            <Grid item xs={6} display="flex" alignItems="center">
                <PokemonesList />
            </Grid>
            <Grid item xs={6}>
                <PokemonCard />
            </Grid>
        </Grid>
    );
};

export default Pokemones;
