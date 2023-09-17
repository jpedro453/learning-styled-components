import React from "react";
import { useState } from "react";

import { ThemeProvider } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";

import Home from "./pages/home";
import Header from "./components/Header";

import { Provider } from "react-redux";
import store from "./store";

function App() {
    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header toggleTheme={toggleTheme} />
                <Home />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
