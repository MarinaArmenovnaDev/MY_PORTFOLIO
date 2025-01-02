import React from 'react';
import mainImg from './../../../assets/images/mainPhoto.webp';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button.";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {Photo} from "../../../components/Photo";
import {TextWrapper} from "../../../components/TextWrapper";
import {PhotoWrapper} from "../../../components/PhotoWrapper";
import {Text} from "../../../components/Text";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} alignItems="center">
                    <TextWrapper maxWidth={"480px"}>
                        <SmallText>Hello,</SmallText>
                        <Name>I’m <span> Daniella Adams</span> </Name>
                        <Text margin={"0 0 16px 0"}>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids
                            cant
                            be less interesting.
                        </Text>
                        <Button>Download CV</Button>
                    </TextWrapper>
                    <PhotoWrapper width={"621px"} height={"692px"} bottom={"-15px"} right={"-25px"}>
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

