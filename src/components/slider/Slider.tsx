import React from 'react';
import {Icon} from "../icon/Icon";
import {Slide} from "./slide/Slide";
import {S} from "./Slider_Styles"

export const Slider = () => {
    return (
        <S.Slider>
            <Icon iconId={"quotes"} width={"110px"} height={"86px"} viewBox={"0 0 110 86"}
                  position={"absolute"} top={"66px"} left={"20%"}  transform={"translate(-50%)"} zIndex={0} data-iconid="quotes"/>
            <Slide/>
        </S.Slider>
    );
};

