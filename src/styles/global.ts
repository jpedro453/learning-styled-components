import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-size: 14px;
    }
    h1{
        font-size: 2.5rem;
    }
    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.1rem;
    }
`;
