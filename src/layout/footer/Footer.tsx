import React from 'react';
import { Container } from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {S} from "./Footer_Styles"

const footerData = [
    { id: 1, iconId: "phone", text: "09028793244" },
    { id: 2, iconId: "mail", text: "shalewa64@gmail.com" },
    { id: 3, iconId: "place", text: "497 Evergreen Rd. Roseville, CA 95673" },
];

const socialIconData = [
    { id: 1, iconId: "twitter" },
    { id: 2, iconId: "inst" },
    { id: 3, iconId: "figure" },
    { id: 4, iconId: "facebook" },
    { id: 5, iconId: "youtube" },
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} gap={"35px"} >
                    <FlexWrapper  justify={"space-around"}  gap={"30px"} >
                        {footerData.map((item) => (
                            <S.Part key={item.id}>
                                {item.iconId && <Icon iconId={item.iconId} width={"25"} height={"23"} viewBox="0 0 25 23" />}
                                <span>{item.text}</span>
                            </S.Part>
                        ))}
                    </FlexWrapper>

                    <FlexWrapper justify={"center"} gap={"30px"}>
                        {socialIconData.map((item) => (
                            <S.SocialItem key={item.id}>
                                <Icon iconId={item.iconId} width="35"  viewBox="0 0 35 23" />
                            </S.SocialItem>
                        ))}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

