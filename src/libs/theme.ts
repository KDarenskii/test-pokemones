import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: { paper: "#131313" },
        primary: { main: "#1986EC" },
        grey: {
            "500": "#A0A0A0",
        },
    },
    typography: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
    },
    breakpoints: {
        values: { xl: 1920, lg: 1028, md: 900, sm: 600, xs: 0 },
    },
    components: {
        MuiChip: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === "medium" && {
                        padding: "20px 8px",
                        borderRadius: "44px",
                        fontSize: "20px",
                        height: "60px",
                    }),
                }),
            },
        },
    },
});

export default theme;
