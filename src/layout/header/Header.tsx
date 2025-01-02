import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo href={""}>Damadams</Logo>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(251, 63, 92, 0.93);
    padding: 20px 0;
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    //Z-index: 999999;
`
const Logo = styled.a`
    text-transform: uppercase;
    color: ${Theme.colors.accentFont};
    font-weight: 400;
    font-size: 36px;
   font-family: "Nova Mono", serif;
`
