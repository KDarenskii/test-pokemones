import React, { FC } from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import click from "assets/img/click.svg";

const Header: FC = () => {
    return (
        <AppBar
            position="static"
            sx={{ backgroundImage: "none", boxShadow: "none" }}
        >
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        fontWeight: 500,
                        p: "7px",
                        border: "1px solid",
                    }}
                >
                    Покемоны API
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <img src={click} alt="" />
                    <Typography
                        sx={{
                            maxWidth: "108px",
                            fontSize: "12px",
                            fontWeight: 600,
                        }}
                    >
                        Нажмите на нужное Покемона
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
