import { useEffect, useState } from "react";

import axios from "axios";

import PokemonService from "services/pokemon.service";

import { IPokemon } from "types/pokemon.interface";

interface PokemonData {
    src: string;
    attack: number;
    id: number;
    height: number;
    name: string;
}

const usePokemon = (name: string) => {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        setError(null);

        (async () => {
            try {
                const response = await PokemonService.getByName(name, {
                    signal: controller.signal,
                });
                setPokemon(response.data);
            } catch (err) {
                if (axios.isCancel(err)) return;
                setError("Something went wrong");
            } finally {
                setIsLoading(false);
            }
        })();

        return () => controller.abort();
    }, [name]);

    let pokemonData: PokemonData | null = null;

    if (pokemon !== null) {
        const { height, id, name: pokemonName, sprites, stats } = pokemon;

        const attack = stats.find(({ stat }) => stat.name === "attack")
            ?.base_stat as number;
        const src = sprites.other.dream_world.front_default;

        const convertedName =
            pokemonName[0].toUpperCase() + pokemonName.substring(1);

        pokemonData = {
            src,
            height,
            id,
            name: convertedName,
            attack,
        };
    }

    return {
        pokemonData,
        isLoading,
        error,
    };
};

export default usePokemon;
