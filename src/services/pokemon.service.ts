import { AxiosRequestConfig, AxiosResponse } from "axios";

import pokemonApi from "api/pokemonApi";

import { IPokemon, IPokemonBase } from "types/pokemon.interface";

interface GetResponse {
    results: IPokemonBase[];
}

class PokemonService {
    static getNames = async (
        limit: number = 10,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<GetResponse>> => {
        return pokemonApi.get<GetResponse>("/", {
            params: { limit },
            ...config,
        });
    };

    static getByName = async (
        name: string,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<IPokemon>> => {
        return pokemonApi.get<IPokemon>(`/${name}`, config);
    };
}

export default PokemonService;
