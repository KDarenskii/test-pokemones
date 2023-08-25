import React, { FC } from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";

const PokemonCard: FC = () => {
    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: "common.black",
                color: "grey.500",
            }}
        >
            <CardHeader
                sx={{ padding: "44px" }}
                title="Bulbasaur"
                titleTypographyProps={{
                    variant: "h3",
                    fontWeight: 700,
                }}
            />
            <CardMedia
                component="img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
                width={96}
                height={200}
                sx={{ objectFit: "fill" }}
            />
            <CardContent sx={{ padding: "44px 44px 16px" }}>
                <Typography component="p">Снялся в 78 сериях</Typography>
                <Typography component="p">Id: 1</Typography>
                <Typography component="p">height: 7</Typography>
                <Typography component="p">attack: 49</Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
