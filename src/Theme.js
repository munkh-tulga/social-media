import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const dark = {

};

const light = {

}

const Theme = ({ children }) => {
    const theme = localStorage.getItem("theme")

    return <ThemeProvider theme={theme === "light" ? light : dark}>{children}</ThemeProvider>
}

export default Theme;



export const GlobalStyles = createGlobalStyle`
    body{
        background-color:${props => props.theme.body};
    }
`
