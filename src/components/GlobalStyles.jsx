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
        /* --color1: rgb(238, 248, 255);
        --color2: rgb(187, 222, 251);
        --color3: rgb(144, 202, 249);
        --color4: rgb(100, 181, 246);
        --color5: rgb(21, 101, 192);
        --color6: rgb(13, 71, 161); */
        --color0: rgb(255, 255, 255);
        --color2: rgb(236, 239, 241);
        --color1: rgb(207, 216, 220);
        --color3: rgb(176, 190, 197);
        --color4: rgb(144, 164, 174);
        --color5: rgb(69, 90, 100);
        --color6: rgb(13, 71, 161);
    }

    [data-theme="dark"]{   
        --color4: rgb(255, 255, 255);
        --color6: rgb(236, 239, 241);
        --color2: rgb(207, 216, 220);
        --color3: rgb(176, 190, 197);
        --color5: rgb(144, 164, 174);
        --color0: rgb(69, 90, 100);
        --color1: rgb(38, 50, 56);
        
        *::placeholder {
            color: inherit;
        }
        
        body{    
        color: var(--color6);
        }

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
        color: var(--color5);
        background-color: var(--color1);
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

    img{
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyles;
