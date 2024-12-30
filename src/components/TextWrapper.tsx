import styled from "styled-components";

type TextWrapperPropsType = {
    maxWidth?: string
}

export const TextWrapper = styled.div<TextWrapperPropsType> `
    max-width: ${props => props.maxWidth};
     width: 100%;
`