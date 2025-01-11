import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";

const items = [
    {
        title: 'Home',
        href: 'home',
    },
    {
        title: 'About',
        href: 'about',
    },
    {
        title: 'Latest Works',
        href: 'works',
    },
    {
        title: 'Testimonials',
        href: 'testimonials',
    },
    {
        title: 'Contact',
        href: 'contact',
    }
]

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={isOpen}>
                <NavList>
                    {items.map((item, index) => {
                        return (
                            <NavItems key={index}>
                                <NavLink href={item.href}>{item.title}</NavLink>
                            </NavItems>
                        )
                    })}
                </NavList>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${Theme.media.desktop} {
        display: block;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: absolute;
    top: 28px;
    right: 20px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.accentFont};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: background-color 0.3s ease;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: transparent; 
        `}

        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color:${Theme.colors.accentFont};
            position: absolute;
            top: -10px;
            left: 0;
            transition: transform 0.3s ease, top 0.3s ease;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg);
                top: 0;
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.accentFont};
            position: absolute;
            top: 10px;
            left: 0;
            transition: transform 0.3s ease, top 0.3s ease;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg);
                top: 0;
            `}
        }
    }
`;

const NavList = styled.ul`
    display: flex;
    gap: 52px;
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(251, 63, 92, 0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: none;
    transition: opacity 0.3s ease;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ${NavList} {
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }
`

const NavItems = styled.li`
`

const NavLink = styled.a`
    font-weight: 400;
    font-size: 24px;
    color: ${Theme.colors.accentFont};
    text-transform: capitalize;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        width: 24px;
        height: 6px;
        border-radius: 55px;
        background-color: ${Theme.colors.accentFont};
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover::after {
        opacity: 1;
    }
`