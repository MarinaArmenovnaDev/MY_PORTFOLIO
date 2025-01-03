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
import {PhotoWrapper} from "../../../components/PhotoWrapper";
import {Text} from "../../../components/Text";

const progressIconsData = [
    {iconId: "photoshop", progress: 70, textPosition: 70},

    {iconId: "figma", progress: 50, textPosition: 50},

    {iconId: "ai", progress: 80, textPosition: 80},
]


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify="space-between">
                    <PhotoWrapper width={"410px"} height={"502px"} bottom={"-50px"} right={"-50px"}
                                  backgroundColor={"rgba(251, 63, 92, 0.1)"}>
                        <Photo src={photo} maxWidth={"361px"} height={"452px"}/>
                    </PhotoWrapper>
                    <TextWrapper maxWidth={"600px"}>
                        <Title>I am a creative Graphic & UI Designer</Title>
                        <Text>
                            I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be
                            less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                        <Button>Download CV</Button>
                        <Button backgroundColor={"transparent"} borderColor={"1px solid #fb3f5c"}
                                color={Theme.colors.accent}>View Portfolio</Button>
                        <IconWrapper>
                            {progressIconsData.map((icon, index) => (
                                <ProgressIcon
                                    key={index}
                                    iconId={icon.iconId}
                                    width={"45px"}
                                    height={"45px"}
                                    viewBox={"0 0 45 45"}
                                    progress={icon.progress}
                                    textPosition={icon.textPosition}
                                />
                            ))}
                        </IconWrapper>
                    </TextWrapper>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
    height: 720px;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 48px;
    text-transform: capitalize;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 64px;
`;