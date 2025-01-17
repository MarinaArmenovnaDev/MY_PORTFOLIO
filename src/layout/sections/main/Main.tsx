import React from 'react';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button.";
import { Container } from "../../../components/Container";
import { Photo } from "../../../components/Photo";
import { TextWrapper } from "../../../components/TextWrapper";
import { PhotoWrapper } from "../../../components/PhotoWrapper";
import { Text } from "../../../components/Text";
import { S } from "./Main_Styles";
import photo from "../../../assets/images/mainPhoto.jpg";
import photo2x from "../../../assets/images/mainPhoto@2x.jpg";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { motion, useInView } from "framer-motion";

export const Main = () => {
    // Создаем ref для отслеживания видимости блока
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); // once: true — анимация проигрывается только один раз

    return (
        <S.Main id="home" ref={ref}>
            <Container>
                <FlexWrapper justify={"space-around"} alignItems={"center"} wrap={"wrap-reverse"}>
                    <TextWrapper maxWidth={"480px"}>
                        <S.SmallText>Hello,</S.SmallText>
                        <S.Name>
                            <Typewriter
                                options={{
                                    strings: ['<span>I\'m </span> <span> Daniella Adams</span>'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.Name>
                        <Text margin={"0 0 16px 0"}>
                            I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids
                            cant be less interesting.
                        </Text>
                        <Button>Download CV</Button>
                    </TextWrapper>

                    <PhotoWrapper maxWidth={"621px"} height={"692px"} right={"-20px"} bottom={"-20px"} borderRadius={"10px"}>
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 0.8 , ease: "easeInOut" }}
                        >
                            <Tilt
                                className="parallax-effect-img"
                                tiltMaxAngleX={40}
                                tiltMaxAngleY={40}
                                perspective={800}
                                transitionSpeed={1500}
                                scale={1.1}
                                gyroscope={true}
                            >
                                <Photo
                                    src={photo}
                                    srcSet={`${photo} 1x, ${photo2x} 2x`}
                                    alt="main photo"
                                    maxWidth={"432px"}
                                    height={"541px"}
                                />
                            </Tilt>
                        </motion.div>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};