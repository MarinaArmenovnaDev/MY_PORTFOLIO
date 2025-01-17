import React from 'react';
import { S } from './Results_Styles';
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Кастомная анимация zoomIn
const zoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const Results: React.FC = () => {
    return (
        <StyledResults>
            <Container>
                <Reveal keyframes={zoomIn} duration={1500} fraction={0.5} triggerOnce>
                    <S.GridContainer>
                        <S.GridItem>81+</S.GridItem>
                        <S.GridItem>97+</S.GridItem>
                        <S.GridItem>50</S.GridItem>
                        <S.GridItem>HAPPY CUSTOMERS</S.GridItem>
                        <S.GridItem>Completed Projects</S.GridItem>
                        <S.GridItem>Awards Won</S.GridItem>
                    </S.GridContainer>
                </Reveal>
            </Container>
        </StyledResults>
    );
};

const StyledResults = styled.section`
    /* Ваши стили для секции */
`;