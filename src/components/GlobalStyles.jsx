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
        --color-100: #ffffff;
        --color-110: #fbfbfb;
        --color-120: #dceeff;
        --color-200: #3898ff;
        --color-300: #081ae1;
        --color-400: #191155;
        --color-500: #415acb;
        --color-600: #f6591c;
        --color-700: #040118;
        --color-800: #b4bad3;
    }

    body{
        font-size: 1rem;
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
