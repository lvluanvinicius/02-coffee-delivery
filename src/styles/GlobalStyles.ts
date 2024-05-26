import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :focus {
        border: 0;
        outline: 0;
        
    }

    body {
        background: ${(props) => props.theme.background};
    }

    body, input, textarea, button {
        border: 0;
    }
`;
