import React from 'react';
import styled from "styled-components";
import { Container } from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {Theme} from "../../styles/Theme";

const footerData = [
    { id: 1, iconId: "phone", text: "09028793244" },
    { id: 2, iconId: "mail", text: "shalewa64@gmail.com" },
    { id: 3, iconId: "", text: "497 Evergreen Rd. Roseville, CA 95673" },
];

const socialIconData = [
    { id: 1, iconId: "twitter" },
    { id: 2, iconId: "inst" },
    { id: 3, iconId: "figure" },
    { id: 4, iconId: "facebook" },
    { id: 5, iconId: "youtube" },
];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} gap={"35px"} >
                    <FlexWrapper justify={"space-around"} alignItems={"center"} gap={"30px"} wrap={"wrap-reverse"}>
                        {footerData.map((item) => (
                            <Part key={item.id}>
                                {item.iconId && <Icon iconId={item.iconId} width={"25"} height={"23"} viewBox="0 0 25 23" />}
                                <span>{item.text}</span>
                            </Part>
                        ))}
                    </FlexWrapper>

                    <FlexWrapper justify={"center"} gap={"30px"}>
                        {socialIconData.map((item) => (
                            <SocialItem key={item.id}>
                                <Icon iconId={item.iconId} width="35"  viewBox="0 0 35 23" />
                            </SocialItem>
                        ))}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    width: 100%;
    background-color: rgba(251, 63, 92, 0.9);
    display: flex;
    align-items: center;
    min-height: 230px;
    height: 100%;

    @media screen and (max-width: 1006px) {
        ${FlexWrapper}:first-child {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
    }
    
    @media ${Theme.media.mobile}{
        display: none;
    }
    
    
`;

const Part = styled.div`
    display: flex;
    align-items: center; 
    gap: 18px;
    position: relative;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        right: -15px;
        width: 3px;
        height: 100%;
            background-color: ${Theme.colors.accentFont};
}

    span {
        font-weight: 500;
        font-size: 24px;
        text-transform: lowercase;
        color: ${Theme.colors.accentFont};
    }

    @media screen and (max-width: 1006px) {
        &:not(:last-child)::after {
            display: none;
        }
    }
`;

const SocialItem = styled.div`
    display: flex;
    align-items: center;
`;