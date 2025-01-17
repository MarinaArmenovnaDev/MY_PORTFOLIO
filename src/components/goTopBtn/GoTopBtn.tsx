import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        });
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                    <Icon iconId={"btnGoTop"} width={"16px"} height={"15px"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: ${Theme.colors.secondaryBg};
    position: fixed;
    right: 30px;
    bottom: 30px;
    padding: 8px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${Theme.colors.accent};
    }
`;