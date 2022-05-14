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
        font-size: 62.5%;
        scroll-behavior: smooth;
        box-sizing: border-box;
        --color-100: #ffffff;
        --color-110: #ebebeb;
        --color-120: #dceeff;
        --color-200: #3898ff;
        --color-300: #081ae1;
        --color-400: #191155;
        --color-500: #415acb;
        --color-600: #f6591c;
        --color-700: #040118;
        --color-710: #54506d;
        --color-800: #b4bad3;
    }

    body{
        font-size: 1.4rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        color: var(--color-700);
        background-color: var(--color-110);
    }

    h1,h2,h3{
        font-weight: bold;
        line-height: 1.2;
    }

    h1{
        margin-bottom: 2rem;
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

    section{
        margin-top: 4rem;
        padding: 0 0.5rem;
        border-radius: 8px;
        min-height: 80vh;
    }
`;

export default GlobalStyles;
