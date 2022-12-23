import { createGlobalStyle } from "styled-components";
import dolars from "./assets/images/dolars.jpeg"

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, 
::after,
::before {
    box-sizing: inherit;
}

body {
    max-width: 1000px;
    font-family: "Montserrat", sans-serif;
    padding: 20px;
    margin: 10px auto;
    background-image: url("${dolars}");
}
`;