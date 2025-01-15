import React from 'react';
import mainImg from './../../../assets/images/mainPhoto.jpg';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button.";
import { Container } from "../../../components/Container";
import { Photo } from "../../../components/Photo";
import { TextWrapper } from "../../../components/TextWrapper";
import { PhotoWrapper } from "../../../components/PhotoWrapper";
import { Text } from "../../../components/Text";
import {S} from "./Main_Styles"
import photo from "../../../assets/images/mainPhoto.jpg";
import photo2x from "../../../assets/images/mainPhoto@2x.jpg";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify={"space-around"} alignItems={"center"} wrap={"wrap-reverse"}>
                    <TextWrapper maxWidth={"480px"}>
                        <S.SmallText>Hello,</S.SmallText>
                        <S.Name>I’m <span> Daniella Adams</span> </S.Name>
                        <Text margin={"0 0 16px 0"}>
                            I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids
                            cant be less interesting.
                        </Text>
                        <Button>Download CV</Button>
                    </TextWrapper>
                    <PhotoWrapper maxWidth={"621px"} height={"692px"} right={"-20px"} bottom={"-20px"}>
                        <Photo src={mainImg} srcSet={`${photo} 1x, ${photo2x} 2x`
                        } alt="main photo" maxWidth={"432px"} height={"541px"}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

