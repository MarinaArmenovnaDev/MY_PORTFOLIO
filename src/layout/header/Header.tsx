import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/menu/mobileMenu/MobileMenu";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo href={""}>Damadams</Logo>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color:${Theme.colors.accent};
    padding: 20px 0;
`
const Logo = styled.a`
    text-transform: uppercase;
    color: ${Theme.colors.accentFont};
    font-weight: 400;
    font-size: 36px;
    font-family: "Nova Mono", serif;
`