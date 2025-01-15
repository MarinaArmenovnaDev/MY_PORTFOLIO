import styled from "styled-components";
import { Theme } from "../styles/Theme";

type PhotoPropsType = {
    src: string;
    alt?: string;
    maxWidth?: string;
    height?: string;
};

export const Photo = styled.img<PhotoPropsType>`
    border-radius: 20px;
    max-width: ${props => props.maxWidth || "100%"};
    width: 100%;
    height: ${props => props.height || "auto"};
    object-fit: cover;
    z-index: 0;
    

    @media ${Theme.media.mobile} {
        max-width: 280px;
        width: 100%;
        height: 350px;
        //margin: 0 auto;
    }
`;