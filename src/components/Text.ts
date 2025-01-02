import styled from "styled-components";

type TextPropsType = {
    margin?: string
}


export const Text = styled.p<TextPropsType>`
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.06em;
    margin: ${props => props.margin || "16px 0 48px"};
`