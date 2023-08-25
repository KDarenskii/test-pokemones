import { useEffect, useState } from "react";

import pokemonService from "services/pokemon.service";

import { IPokemonBase } from "types/pokemon.interface";

const usePokemonesList = () => {
    const [pokemones, setPokemones] = useState<IPokemonBase[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await pokemonService.get();
                setPokemones(response.data.results);
            } catch (err) {
                console.log(err);
                setError("error happened");
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return { pokemones, isLoading, error };
};

export default usePokemonesList;

// useEffect(() => {
//     let cancel: Canceler;
//     (async () => {
//         setIsLoading(true);
//         setError(null);
//         try {
//             const response = await PostService.get({
//                 cancelToken: new axios.CancelToken((c) => (cancel = c)),
//                 params: {
//                     page,
//                     limit: LIMIT,
//                     userId: user.id,
//                 },
//             });
//             setPosts((prevPosts) => [...prevPosts, ...response.data]);
//             setHasMore(response.data.length > 0);
//         } catch (error) {
//             if (axios.isCancel(error)) return;
//             setError("Something went wrong");
//         } finally {
//             setIsLoading(false);
//         }
//     })();
//     return () => cancel();
// }, [page, user.id]);
