import styled from "styled-components";
import {Theme} from "../styles/Theme";

type PhotoWrapperPropsType = {
    maxWidth?: string;
    height?: string;
    bottom?: string;
    right?: string;
    backgroundColor?: string;
    borderRadius?: string;
    margin?: string;
};

export const PhotoWrapper = styled.div<PhotoWrapperPropsType>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    max-width: ${props => props.maxWidth};
    width: 100%;
    height: ${props => props.height};
    margin: ${props => props.margin};

    &::before {
        content: '';
        position: absolute;
        bottom: ${props => props.bottom};
        right: ${props => props.right};
        width: 100%;
        height: 100%;
        background-color: ${props => props.backgroundColor || "rgba(251, 63, 92, 0.5)"};
        clip-path: polygon(100% 0, 100% 100%, 0 100%);
        border-radius: ${props => props.borderRadius};
        z-index: -1;

        @media ${Theme.media.mobile} {
            bottom: -20px ;
            right: -20px;
        }


    }

    @media ${Theme.media.desktop} {
        margin-bottom: 57px;
        
    }

    @media ${Theme.media.tablet} {
        margin: 0 0 57px;
    }

    @media ${Theme.media.mobile} {
        max-width: 306px;
        width: 100%;
        height: 376px;

    }



`;