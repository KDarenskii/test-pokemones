import React from "react";

import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";

import theme from "libs/theme";

import "assets/styles/index.scss";

import App from "./components/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
);
