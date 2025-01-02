import React from 'react';
import person from "../../assets/images/review.webp";
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Theme} from "../../styles/Theme";

type StarWrapperPropsType = {
    gap?: string;
    marginTop?: string;
}

export const Slide = () => {
    return (
        <StyledSlide>
            <Photo src={person}></Photo>
            <Name>Adams Ademola</Name>
            <Status>Happy Client</Status>
            <Review>“Everyone working in the office is very knowledgeable about all types of dental work
                and options for your individual needs.”</Review>
            <StarWrapper>
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Icon key={index} iconId={"star"} width={"26px"} height={"24px"} viewBox={"0 0 26 24"}/>
                ))}
            </StarWrapper>
        </StyledSlide>

    );
};

const StyledSlide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 726px;
    min-height: 394px;
    margin: 0 auto;
    border-radius: 140px 0;
    background-color: ${Theme.colors.primaryBg};
`


const Photo = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
`

const Name = styled.span`
    font: 600 24px / 1.08333 "Poppins", sans-serif;
    text-align: center;
    margin-top: 20px;
`

const Status = styled.span`
    font: 400 18px / 1.44444 "Poppins", sans-serif;
    text-align: center;
    color: ${Theme.colors.accent};
    margin-bottom: 20px;
`

const Review = styled.p`
    font: 400 18px / 1.44444 "Poppins", sans-serif;
    text-align: center;
    max-width: 612px;
    color: ${Theme.colors.secondaryFont};
`


const StarWrapper = styled.div<StarWrapperPropsType>`
    display: flex;
    gap: ${props => props.gap || "6px"};
    margin-top: ${props => props.marginTop || "12px"}
`;