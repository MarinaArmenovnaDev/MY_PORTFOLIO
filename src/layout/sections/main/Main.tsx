import React from 'react';
import mainImg from './../../../assets/images/mainPhoto.webp';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button.";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {Photo} from "../../../components/Photo";
import {TextWrapper} from "../../../components/TextWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} alignItems="center">
                    <TextWrapper maxWidth={"480px"}>
                        <SmallText>Hello,</SmallText>
                        <Name>I’m <span> Daniella Adams</span> </Name>
                        <Text>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids
                            cant
                            be less interesting.</Text>
                        <Button>Download CV</Button>
                    </TextWrapper>
                    <PhotoWrapper>
                        <Photo src={mainImg} alt="main photo" maxWidth={"432px"} height={"541px"}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    height: 720px;
    display: flex;

`;

const PhotoWrapper = styled.div`
    width: 621px;
    height: 692px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 64px;
        left: 27px;
        bottom: -87px;
        right: -162px;
        width: 100%;
        height: 100%;
        background-color: rgba(251, 63, 92, 0.5);
        clip-path: polygon(100% 0, 100% 100%, 0 100%);
        z-index: -1;
    }
`;


const SmallText = styled.p`
    font-size: 28px;
    font-weight: 400;
    color: #000;
`;

const Name = styled.p`
    font-weight: 700;
    font-size: 50px;
    text-transform: capitalize;

    span {
        color: ${Theme.colors.accent}
    }
`;

 const Text = styled.p`
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.06em;
    margin-bottom: 16px;
`;