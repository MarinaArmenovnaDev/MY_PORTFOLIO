import React from 'react';
import person from "../../../assets/images/review.webp";
import { Icon } from "../../icon/Icon";
import { S } from "./Slide_Styles";

export const Slide: React.FC = () => {
    return (
        <S.Slide>
            <Icon iconId="quotes" width="110px" height="86px" viewBox={"0 0 110 86"} />
            <S.Photo src={person} alt="Reviewer" />
            <S.Name>Adams Ademola</S.Name>
            <S.Status>Happy Client</S.Status>
            <S.Review>
                “Everyone working in the office is very knowledgeable about all types of dental work
                and options for your individual needs.”
            </S.Review>
            <S.StarWrapper gap="6px" marginTop="12px">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Icon key={index} iconId={"star"} width={"26px"} height={"24px"} viewBox={"0 0 26 24"} />
                ))}
            </S.StarWrapper>
        </S.Slide>
    );
};