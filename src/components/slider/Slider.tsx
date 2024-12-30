import React from 'react';
import person from "../../assets/images/review.webp";
import {ProgressIcon} from "../icon/progressIcon/ProgressIcon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";

export const Slide = () => {
    return (
        <FlexWrapper justify="center" direction="column">
            <Photo src={person}></Photo>
            <Name>Adams Ademola</Name>
            <Status>Happy Client</Status>
            <Text>“Everyone working in the office is very knowledgeable about all types of dental work
                and options for your individual needs.”</Text>
            <Icon iconId={"raiting"} width={"154px"} height={"26px"} viewBox={"0 0 154 26"}/>
         </FlexWrapper>

    );
};


const Photo = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
`

const Name = styled.span``

const Status = styled.span`
    color: red;
`

const Text = styled.p`
    max-width: 612px;
    text-align: center;
`