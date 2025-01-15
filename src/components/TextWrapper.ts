import styled from "styled-components";
import {Theme} from "../styles/Theme";

type TextWrapperPropsType = {
    maxWidth?: string


}

export const TextWrapper = styled.div<TextWrapperPropsType>`
    max-width: ${props => props.maxWidth};
    width: 100%;

    @media ${Theme.media.desktop} {
        text-align: center;
    }
    
    @media ${Theme.media.tablet} {
        text-align: center;
    }

    @media ${Theme.media.mobile} {
        text-align: center;
        
        &:last-child{
            text-align: left;
        }
    }

`