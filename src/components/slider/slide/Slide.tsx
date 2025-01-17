import React from 'react';
import { Icon } from "../../icon/Icon";
import { S } from "./Slide_Styles";

type SlidePropsType = {
    text?: string;
    userName?: string;
    photo?: string;
    status?: string;
    stars?: number;
}

export const Slide: React.FC<SlidePropsType> = ({ text, userName, photo, status, stars = 5 }) => {
    return (
        <S.Slide>
            <Icon iconId="quotes" width="110px" height="86px" viewBox={"0 0 110 86"} />
            <S.Photo src={photo} alt="Reviewer" />
            <S.Name>{userName}</S.Name>
            <S.Status>{status}</S.Status>
            <S.Review>{text}</S.Review>
            <S.StarWrapper gap="6px" marginTop="12px">
                {Array.from({ length: stars }, (_, index) => (
                    <Icon key={index} iconId={"star"} width={"26px"} height={"24px"} viewBox={"0 0 26 24"} />
                ))}
            </S.StarWrapper>
        </S.Slide>
    );
};