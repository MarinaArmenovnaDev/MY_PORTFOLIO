import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/mainPhoto.webp";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button.";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ProgressIcon} from "../../../components/icon/progressIcon/ProgressIcon";
import {Photo} from "../../../components/Photo";
import {TextWrapper} from "../../../components/TextWrapper";
import {Theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify="space-between">
                    <PhotoWrapper>
                        <Photo src={photo} maxWidth={"361px"} height={"452px"} />
                    </PhotoWrapper>
                    <TextWrapper maxWidth={"600px"}>
                        <Title>I am a creative Graphic & UI Designer</Title>
                        <Text>
                            I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                        <Button>Download CV</Button>
                        <Button backgroundColor={"transparent"} borderColor={"1px solid #fb3f5c"} color={Theme.colors.accent}>View Portfolio</Button>
                        <IconWrapper>
                            <ProgressIcon iconId={"photoshop"} width={"45px"} height={"45px"} viewBox={"0 0 45 45"} progress={70} textPosition={70}/>
                            <ProgressIcon iconId={"figma"} width={"45px"} height={"45px"} viewBox={"0 0 45 45"} progress={50} textPosition={50} />
                            <ProgressIcon iconId={"ai"} width={"45px"} height={"45px"} viewBox={"0 0 45 45"} progress={80} textPosition={80} />
                        </IconWrapper>
                    </TextWrapper>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const PhotoWrapper = styled.div`
    width: 410px;
    height: 502px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;

    &::before {
        content: '';
        position: absolute;
        bottom: -50px;
        right: -49px;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background-color: rgba(251, 63, 92, 0.1);
        clip-path: polygon(100% 0, 100% 100%, 0 100%);
        z-index: -1;
    }
`;

const StyledAbout = styled.section`
    display: flex;
    height: 720px;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 48px;
    text-transform: capitalize;
`;

const Text = styled.p`
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.06em;
    margin: 16px 0 48px;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px; 
    margin-top: 64px;
`;