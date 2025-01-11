import React from 'react';
import iconsSprite from "../../assets/images/icon-sprite.svg";
import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string;
    height?: string;
    viewBox?: string;

    position?: string;
    top?: string;
    left?: string;
    transform?: string;
    zIndex?: number;
}

type IconWrapperPropsType = {
    width?: string;
    height?: string;
    position?: string;
    top?: string;
    left?: string;
    transform?: string;
    zIndex?: number;
}

export const Icon = (props: IconPropsType) => {
    return (
        <IconWrapper width={props.width} height={props.height} {...props}>
            <svg width={props.width || "50px"}
                 height={props.height || "50px"}
                 viewBox={props.viewBox || "0 0 50 50"}
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
            </svg>
        </IconWrapper>
    );
};

export const IconWrapper = styled.div<IconWrapperPropsType>`
    width: ${props => props.width || "50px"};
    height: ${props => props.height || "50px"};
    display: flex;

    position: ${props => props.position || "static"};
    top: ${props => props.top || "0"};
    left: ${props => props.left || "0"};
    transform: ${props => props.width || "none"};
    z-index: ${props => props.zIndex || 0};
    
    
`