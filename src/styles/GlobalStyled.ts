import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Nunito",-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.colors.font}
        line-height: 1.2;
        min-width: 375px;
    }
    
    a {
        text-decoration: none;
    }
    
    ul{
        list-style: none;
    }
    
    button{
        background-color: unset;
        border: none;
    }
    
    section{
        margin-bottom: 150px;
        
        @media ${Theme.media.desktop}{
            margin-bottom: 100px;
        }

        @media ${Theme.media.mobile}{
            
            &:nth-child(3){
                margin-bottom: 0;
            }
         
        }
    }

    section:nth-of-type(2n){
        background-color: ${Theme.colors.primaryBg};
    }
    
    section:nth-of-type(2n+3){
        background-color: ${Theme.colors.secondaryBg};
    }
    
`