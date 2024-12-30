import React from 'react';
import iconsSprite from "../../assets/images/icon-sprite.svg";
import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string;
    height?: string;
    viewBox?: string;
}

type IconWrapperPropsType = {
    width?: string;
    height?: string;
}

export const Icon = (props: IconPropsType) => {
    return (
        <IconWrapper width={props.width} height={props.height}>
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

const IconWrapper = styled.div<IconWrapperPropsType>`
    width: ${props => props.width || "50px"};
    height: ${props => props.height || "50px"};
    display: flex;
    border: 1px solid red;
    background-color: #fff;
`