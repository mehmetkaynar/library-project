//create global styles

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;
    }

    body{
        font-size: 1.5rem;
        background-color: ${({ theme }) => theme.colors.mainColor};
    }


`;
