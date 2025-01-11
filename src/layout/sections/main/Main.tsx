import React from 'react';
import mainImg from './../../../assets/images/mainPhoto.webp';
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button.";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";
import { Photo } from "../../../components/Photo";
import { TextWrapper } from "../../../components/TextWrapper";
import { PhotoWrapper } from "../../../components/PhotoWrapper";
import { Text } from "../../../components/Text";
import { font } from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} alignItems={"center"} wrap={"wrap-reverse"}>
                    <TextWrapper maxWidth={"480px"}>
                        <SmallText>Hello,</SmallText>
                        <Name>I’m <span> Daniella Adams</span> </Name>
                        <Text margin={"0 0 16px 0"}>
                            I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids
                            cant be less interesting.
                        </Text>
                        <Button>Download CV</Button>
                    </TextWrapper>
                    <PhotoWrapper maxWidth={"621px"} height={"692px"} right={"-20px"}>
                        <Photo src={mainImg} alt="main photo" maxWidth={"432px"} height={"541px"}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    height: 100vh;
    display: flex;
    
    @media ${Theme.media.desktop}{
        height: max-content;
    }
    
`;

const SmallText = styled.p`
    ${font({ weight: 400, Fmax: 28, Fmin: 18 })}
`;

const Name = styled.p`
    ${font({ weight: 700, Fmax: 50, Fmin: 32 })} 
    text-transform: capitalize;
   

    span {
        color: ${Theme.colors.accent};
    }
`;


