import React from 'react';
import photo from "../../../assets/images/mainPhoto.jpg";
import photo2x from "../../../assets/images/mainPhoto@2x.jpg";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button.";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ProgressIcon } from "../../../components/icon/progressIcon/ProgressIcon";
import { Photo } from "../../../components/Photo";
import { TextWrapper } from "../../../components/TextWrapper";
import { Theme } from "../../../styles/Theme";
import { PhotoWrapper } from "../../../components/PhotoWrapper";
import { Text } from "../../../components/Text";
import { ProgressIconsWrapper, S } from "./About_Styles";
import { Link } from "react-scroll";

const progressIconsData = [
    { iconId: "photoshop", progress: 70, textPosition: 70 },
    { iconId: "figma", progress: 50, textPosition: 50 },
    { iconId: "ai", progress: 80, textPosition: 80 },
];

export const About: React.FC = () => {
    return (
        <S.About id={'about'}>
            <Container>
                <FlexWrapper justify="space-around" wrap={"wrap"}>
                    <PhotoWrapper maxWidth={"361px"} height={"452px"} right={"-50px"} bottom={"-50px"}
                                  margin={"0 140px 0 0"}
                                  backgroundColor={"rgba(251, 63, 92, 0.08)"} borderRadius={"10px"}>
                        <Photo src={photo} srcSet={`${photo} 1x, ${photo2x} 2x`} />
                    </PhotoWrapper>
                    <TextWrapper maxWidth={"600px"}>
                        <S.Title>I am a creative Graphic & UI Designer</S.Title>
                        <Text>
                            I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be
                            less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                            <Button>Download CV</Button>
                        <Link
                            to="works"
                            smooth={true}
                            duration={500}
                            offset={50}
                        >
                            <Button backgroundColor={"transparent"} borderColor={"1px solid #fb3f5c"}
                                    color={Theme.colors.accent}>View Portfolio</Button>
                        </Link>

                        <ProgressIconsWrapper wrap={"wrap"} gap={"16px"} margin={" 50px 0 0 "}>
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
                        </ProgressIconsWrapper>
                    </TextWrapper>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};