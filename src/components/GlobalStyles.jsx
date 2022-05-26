import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
        box-sizing: border-box;
        --color-100: #ffffff;
        --color-110: #f7f7f7;
        --color-120: #dceeff;
        --color-200: #3898ff;
        --color-300: #081ae1;
        --color-400: #191155;
        --color-500: #415acb;
        --color-600: #f6591c;
        --color-700: #040118;
        --color-710: #54506d;
        --color-800: #d1d4e2;
        --note-color-01: hsl(34, 78%, 92%);
        --note-color-02: hsl(120, 73%, 85%);
        --note-color-03: hsl(195, 53%, 85%);

    }

    body{
        font-size: 1.4rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
        color: var(--color-710);
        background-color: var(--color-110);
    }

    input, button{
        height: 40px;
    }

    textarea, input, button{
        border: none;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background: none;
    }

    button{
        cursor: pointer;
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
