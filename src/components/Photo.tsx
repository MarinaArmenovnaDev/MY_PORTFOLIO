import styled from "styled-components";

type PhotoPropsType = {
    src: string;
    alt?: string;
    maxWidth: string;
    height: string;
}

export const Photo = styled.img<PhotoPropsType>`
    border-radius: 20px;
    max-width: ${props => props.maxWidth};
    height: ${props => props.height};
    width: 100%;
    object-fit: cover;
    z-index: 0;
`