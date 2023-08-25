import React, { FC } from "react";

import { Chip, Stack } from "@mui/material";

import usePokemonesList from "./usePokemonesList";

const PokemonesList: FC = () => {
    const { pokemones, isLoading, error } = usePokemonesList();

    return (
        <Stack direction="row" columnGap="6px" rowGap="10px" flexWrap="wrap">
            {pokemones.map(({ name }) => (
                <Chip
                    label={name}
                    color="primary"
                    size="medium"
                    onClick={() => console.log("clicked chip")}
                    key={name}
                />
            ))}
        </Stack>
    );
};

export default PokemonesList;
