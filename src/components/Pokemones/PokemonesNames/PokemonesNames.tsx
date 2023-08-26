import React, { FC } from "react";

import { PokemonesNamesList } from "components/PokemonesNamesList";

import PokemonesNamesError from "./PokemonesNamesError";
import PokemonesNamesLoading from "./PokemonesNamesLoading";
import usePokemonesNames from "./usePokemonesNames";

interface Props {
    onClick: (name: string) => void;
}

const PokemonesNames: FC<Props> = ({ onClick }) => {
    const { error, isLoading, names } = usePokemonesNames();

    if (error) {
        return (
            <PokemonesNamesError>
                {error} - <strong>try again later</strong>
            </PokemonesNamesError>
        );
    }

    if (isLoading) {
        return <PokemonesNamesLoading />;
    }

    return <PokemonesNamesList list={names} onClick={onClick} />;
};

export default PokemonesNames;
