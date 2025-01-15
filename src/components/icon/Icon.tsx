import React from 'react';
import iconsSprite from "../../assets/images/icon-sprite.svg";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon: React.FC<IconPropsType> = (props) => {
    return (
        <svg
            width={props.width || "50px"}
            height={props.height || "50px"}
            viewBox={props.viewBox || "0 0 50 50"}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <use href={`${iconsSprite}#${props.iconId}`}></use>
        </svg>
    );
};