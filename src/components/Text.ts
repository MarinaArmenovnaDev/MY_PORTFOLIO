import styled from "styled-components";
import {font} from "../styles/Common";
import {Theme} from "../styles/Theme";

type TextPropsType = {
    margin?: string
}


export const Text = styled.p<TextPropsType>`
    ${font({weight:400, Fmax:24, Fmin:18})}
    letter-spacing: 0.06em;
    margin: ${props => props.margin || "16px 0 48px"};
    
    @media ${Theme.media.desktop}{
        margin: 8px 0 28px;
    }
`
