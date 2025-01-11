import React, {useState} from 'react';
import styled from "styled-components";

import {Slide} from "../../../components/slider/Slide";
import {Container} from "../../../components/Container";
import {Icon, IconWrapper} from "../../../components/icon/Icon";
import {Theme} from "../../../styles/Theme";


export const Testimony = () => {
    const [activeDot, setActiveDot] = useState(0);
    return (

        <StyledTestimony>
            <Container>
                <Slider>
                    <Icon iconId={"quotes"} width={"110px"} height={"86px"} viewBox={"0 0 110 86"}
                          position={"absolute"} top={"66px"} left={"20%"}  transform={"translate(-50%)"} zIndex={0} data-iconid="quotes"/>
                    <Slide/>
                </Slider>
                <Pagination>
                    {[0, 1, 2].map((index) => (
                        <PaginationDot
                            key={index}
                            active={activeDot === index}
                            onClick={() => setActiveDot(index)}
                        />
                    ))}
                </Pagination>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    display: flex;
    align-items: center;

    @media ${Theme.media.tablet} {
        ${IconWrapper}[data-iconid="quotes"] {
            width: 80px;
            top: 65px;
            left: 15%;
        }
    }

    @media ${Theme.media.mobile} {
        ${IconWrapper}[data-iconid="quotes"]{
            width: 60px;
            top: 50px;
        }
    }
`

const Slider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;
    margin-top: 60px;

`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 40px 0 20px;
`;

const PaginationDot = styled.div<{ active?: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.active ? Theme.colors.accent : Theme.colors.primaryBg)};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${Theme.colors.accent};
    }
`;