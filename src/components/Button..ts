import styled from "styled-components";
import {Theme} from "../styles/Theme";

type ButtonPropsType = {
    color?: string;
    backgroundColor?: string
    borderColor?: string
    marginBottom?: string
}

export const Button = styled.button<ButtonPropsType>`
    border-radius: 18px;
    width: 225px;
    height: 65px;
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.color || Theme.colors.accentFont};
    background-color: ${props => props.backgroundColor || Theme.colors.accent};
    border: ${props => props.borderColor || "none"};

    & + a {
        margin-left: 16px;
        
    }

    @media ${Theme.media.desktop} {
        &:last-child{
            margin-bottom: 50px;
        }
    }
    

    @media ${Theme.media.mobile} {
        display: block;
        margin: 0 auto ;
        


        & + button {
            margin: 28px auto 0 ;
        }
        
        &:last-of-type{
            margin-bottom: 50px;
    }
    }

`