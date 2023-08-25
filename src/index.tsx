import React from "react";

import { ThemeProvider } from "@mui/material";
import theme from "libs/theme";
import ReactDOM from "react-dom/client";

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
