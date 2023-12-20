import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 62.5%;
}

body {
    background: ${({theme})=> theme.COLORS["base-background"] };
}
body, input, textarea, button {
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    cursor: pointer;
}

::-webkit-scrollbar {
    background-color: transparent;
    width: 0.7rem;
    height: 0.7rem;
}

::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 2rem;
}

::-webkit-scrollbar-thumb:hover {
    background-color: gray;
}

::-webkit-scrollbar-corner {
    display: none;
}



`