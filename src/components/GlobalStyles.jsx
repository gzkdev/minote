import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html,body{
        height: 100%;
    }

    html{
        font-size: 100%;
        scroll-behavior: smooth;
        box-sizing: border-box;
        --color-bg: #f0f0f0;
        --color-text:rgb(12, 32, 39);
        --color-white: hsl(0, 0%, 100%);
        --color-off-white: rgb(235, 235, 235);
        --color-blue: 195, 65%, 50%;
        --color-red: 0, 100%, 50%;
        --color-yellow: 44, 100%, 53%;
        --color-green: 110, 91%, 40%;
    }

    body{
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        color: var(--color-text);
        background-color: var(--color-bg);
    }

    h1,h2,h3{
        font-weight: bold;
        line-height: 1.2;
    }

    input, button{
        height: 40px;
        outline: none;
        border: none;
        background: none;
        font: inherit;
        color: inherit;
    }

    *::placeholder{
        color: inherit;
        font: inherit;
    }

    img{
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyles;
