import styled from "styled-components";

type PhotoWrapperPropsType = {
    width: string;
    height: string;
    bottom: string;
    right: string;
    backgroundColor?: string;
};

export const PhotoWrapper = styled.div<PhotoWrapperPropsType>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    width: ${props => props.width}; 
    height: ${props => props.height}; 

    &::before {
        content: '';
        position: absolute;
        bottom: ${props => props.bottom}; 
        right: ${props => props.right};
        width: 100%;
        height: 100%;
        background-color: ${props => props.backgroundColor || "rgba(251, 63, 92, 0.5)"}; 
        clip-path: polygon(100% 0, 100% 100%, 0 100%);
        z-index: -1;
    }
`;