import React, { FC } from "react";

import { PokemonesCard } from "components/PokemonesCard";

import PokemonError from "./PokemonError";
import PokemonLoading from "./PokemonLoading";
import usePokemon from "./usePokemon";

interface Props {
    name: string;
}

const Pokemon: FC<Props> = ({ name }) => {
    const { pokemonData, isLoading, error } = usePokemon(name);

    if (error) {
        return (
            <PokemonError>
                {error} - <strong>try again later</strong>
            </PokemonError>
        );
    }

    if (isLoading) return <PokemonLoading />;

    if (pokemonData === null) return null;

    const { attack, height, id, name: pokemonName, src } = pokemonData;

    return (
        <PokemonesCard
            id={id}
            attack={attack}
            height={height}
            src={src}
            name={pokemonName}
        />
    );
};

export default Pokemon;
