import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root{
      --background: #f0f2f5;
      --blue: #2589ff;
      --text-title: #363F5F;
      --text-body: #969CB3;
      --text-btn: #FFFFFF;
      --bg-card: #FFFFFF;
    }


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
        background: var(--background);
    }

    body, input, button{
      font-family: 'Poppins', sans-serif;
    }

    a{
      text-decoration:none;
    }

    button{
        cursor: pointer;
    }

`;
