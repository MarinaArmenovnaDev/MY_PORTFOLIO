import styled from "styled-components";
import {Theme} from "../styles/Theme";

type ButtonPropsType = {
    color?: string;
    backgroundColor?: string
    borderColor?: string
}

export const Button = styled.button<ButtonPropsType>`
    border-radius: 18px;
    width: 225px;
    height: 65px;
    font-weight: 400;
    font-size: 20px;
    color:${props => props.color || Theme.colors.accentFont};
    background-color: ${props => props.backgroundColor || Theme.colors.accent};
    border: ${props => props.borderColor || "none"};

    & + button{
    margin-left: 16px;
}
`