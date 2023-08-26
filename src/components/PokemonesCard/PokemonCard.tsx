import React, { FC } from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";

interface Props {
    id: number;
    name: string;
    src: string;
    height: number;
    attack: number;
}

const PokemonCard: FC<Props> = ({ id, name, src, height, attack }) => {
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
                title={name}
                titleTypographyProps={{
                    variant: "h3",
                    fontWeight: 700,
                    fontSize: { lg: "3rem", xs: "2.5rem" },
                }}
            />
            <CardMedia
                component="img"
                src={src}
                width={96}
                height={200}
                sx={{
                    height: "auto",
                    maxHeight: { md: "200px", xs: "150px" },
                    objectFit: "fill",
                }}
            />
            <CardContent sx={{ padding: "44px 44px 16px" }}>
                <Typography component="p">Снялся в 78 сериях</Typography>
                <Typography component="p">Id: {id}</Typography>
                <Typography component="p">height: {height}</Typography>
                <Typography component="p">attack: {attack}</Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
