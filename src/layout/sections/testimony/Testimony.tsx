import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Slide} from "../../../components/slider/Slider";
import {Icon} from "../../../components/icon/Icon";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <Icon iconId={"quotes"} width={"110px"} height={"86px"} viewBox={"0 0 110 86"}/>
                <Slide/>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    height: 50vh;
`


