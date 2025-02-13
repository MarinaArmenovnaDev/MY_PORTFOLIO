import React from 'react';
import iconsSprite from '../../../assets/images/icon-sprite.svg';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../FlexWrapper";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    progress?: number; // Прогресс в процентах
    textPosition?: number;
};

type IconWrapperPropsType = {
    width?: string;
    height?: string;
};

type ProgressTextPropsType = {
    progress?: number;
    textPosition?: number;
}

export const ProgressIcon = (props: IconPropsType) => {
    return (
        <FlexWrapper alignItems={"flex-end"} gap={"14px"} >
                <svg width={props.width || "50px"}
                     height={props.height || "50px"}
                     viewBox={props.viewBox || "0 0 50 50"}
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink">
                    <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
                </svg>
            <ProgressBar progress={props.progress}>
                <ProgressText textPosition={props.textPosition || props.progress}>
                    {props.progress}%
                </ProgressText>
            </ProgressBar>
        </FlexWrapper>
    );
};



const ProgressBar = styled.div<ProgressTextPropsType>`
    position: relative;
    width: 210px;
    height: 8px;
    background-color: #ccc; 
    margin-bottom: 3px;

    //Розовая часть прогрессбара
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => (props.progress || 0)}%; 
        height: 100%;
        background-color: ${Theme.colors.accent}; 
        border-radius: 2px;
    }
`;

const ProgressText = styled.span<{ textPosition?: number }>`
    position: absolute;
    top: -20px; 
    left: ${props => props.textPosition || 0}%; 
    transform: translateX(-25px); 
    font-size: 14px;
    font-weight: 400;
`;