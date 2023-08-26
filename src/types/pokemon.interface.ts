interface Stat {
    base_stat: number;
    stat: { name: string };
}

export interface IPokemonBase {
    name: string;
}

export interface IPokemon extends IPokemonBase {
    id: number;
    height: number;
    stats: Stat[];
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
}
