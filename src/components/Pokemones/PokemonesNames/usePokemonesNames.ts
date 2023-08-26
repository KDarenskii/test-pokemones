import { useEffect, useState } from "react";

import axios from "axios";

import PokemonService from "services/pokemon.service";

import { IPokemonBase } from "types/pokemon.interface";

const usePokemonesNames = () => {
    const [names, setNames] = useState<IPokemonBase[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        setError(null);

        (async () => {
            try {
                const response = await PokemonService.getNames(10, {
                    signal: controller.signal,
                });
                setNames(response.data.results);
            } catch (err) {
                if (axios.isCancel(err)) return;
                setError("Something went wrong");
            } finally {
                setIsLoading(false);
            }
        })();

        return () => controller.abort();
    }, []);

    return { names, isLoading, error };
};

export default usePokemonesNames;
