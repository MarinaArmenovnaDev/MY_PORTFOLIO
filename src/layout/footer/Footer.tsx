import React from 'react';
import styled from "styled-components";
import { Container } from "../../components/Container";
import { ProgressIcon } from "../../components/icon/progressIcon/ProgressIcon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper>
                    <Telephone>
                        <ProgressIcon iconId={"phone"} />
                        <span>09028793244</span>
                    </Telephone>
                    <Mail>
                        <ProgressIcon iconId={"mail"} />
                        <span>shalewa64@gmAil.com</span>
                    </Mail>
                    <Span>
                        497 Evergreen Rd. Roseville, CA 95673
                    </Span>
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
`;


const Telephone = styled.div`
    display: flex;
    align-items: center;
`;

const Mail = styled.div`
    display: flex;
    align-items: center;
`;

const Span = styled.span`
    display: block; // Чтобы текст был на одной строке
`;