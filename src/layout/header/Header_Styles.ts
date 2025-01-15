import styled from "styled-components";
import {Theme} from "../../styles/Theme";

const Header = styled.header`
    background-color:${Theme.colors.accent};
    padding: 20px 0;
`
const Logo = styled.a`
    text-transform: uppercase;
    color: ${Theme.colors.accentFont};
    font-weight: 400;
    font-size: 36px;
    font-family: "Nova Mono", serif;
    
    h1{
        display: none;
    }
`


export const S ={
    Header,
    Logo
}