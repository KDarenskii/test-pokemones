import { AxiosResponse } from "axios";

import pokemonApi from "api/pokemonApi";

import { IPokemon, IPokemonBase } from "types/pokemon.interface";

interface GetResponse {
    results: IPokemonBase[];
}

class PokemonService {
    get = async (limit: number = 10): Promise<AxiosResponse<GetResponse>> => {
        return pokemonApi.get<GetResponse>("/", { params: { limit } });
    };

    getByName = async (name: string): Promise<AxiosResponse<IPokemon>> => {
        return pokemonApi.get<IPokemon>(`/${name}`);
    };
}

export default new PokemonService();
