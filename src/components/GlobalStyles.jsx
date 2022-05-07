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
        --fs--2: clamp(0.79rem, calc(0.59rem + 0.52vw), 0.96rem);
        --fs--1: clamp(0.8rem, calc(0.61rem + 0.82vw), 1.10rem);
        --fs-0: clamp(0.88rem, calc(0.63rem + 1.22vw), 1.250rem);
        --fs-1: clamp(0.98rem, calc(0.64rem + 1.74vw), 1.56rem);
        --fs-2: clamp(1.11rem, calc(0.63rem + 2.41vw), 2.00rem);
        --fs-3: clamp(1.25rem, calc(0.59rem + 3.29vw), 2.58rem);
        --fs-4: clamp(1.40rem, calc(0.52rem + 4.41vw), 3.125rem);
        --fs-5: clamp(1.58rem, calc(0.41rem + 5.85vw), 3.88rem);
    }

    body{
        font-size: var(--fs--2);
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

    section{
        padding: 6rem 0;
    }
`;

export default GlobalStyles;
