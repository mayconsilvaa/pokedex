import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        border:0;
        outline: 0;
        box-sizing:border-box;
    }

    *:focus{
        outline:0;
    }

    html, body, #root{
        max-width: 1920px;
        overflow-x: hidden;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }


`;

