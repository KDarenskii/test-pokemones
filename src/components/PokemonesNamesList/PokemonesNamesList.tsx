import React, { FC } from "react";

import { Chip, Stack } from "@mui/material";

import { IPokemonBase } from "types/pokemon.interface";

interface Props {
    list: IPokemonBase[];
    onClick: (name: string) => void;
}

const PokemonesNamesList: FC<Props> = ({ list, onClick }) => {
    return (
        <Stack direction="row" columnGap="6px" rowGap="10px" flexWrap="wrap">
            {list.map(({ name }) => (
                <Chip
                    sx={{
                        padding: { lg: "20px 8px", xs: "12px 4px" },
                        borderRadius: "44px",
                        fontSize: { lg: "20px", xs: "18px" },
                        height: { lg: "60px", xs: "32px" },
                    }}
                    label={name}
                    color="primary"
                    size="medium"
                    onClick={() => onClick(name)}
                    key={name}
                />
            ))}
        </Stack>
    );
};

export default PokemonesNamesList;
