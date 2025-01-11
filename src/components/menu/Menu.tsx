import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

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

export const Menu = () => {
    return (
            <StyledNav>
                <NavList>
                    {items.map((item, index) => {
                        return (
                            <NavItems key={index}>
                                <NavLink href={item.href}>{item.title}</NavLink>
                            </NavItems>
                        )
                    })}
                </NavList>
            </StyledNav>
    );
};

const StyledNav = styled.nav`
    @media ${Theme.media.desktop} {
        display : none;
    }
`

const NavList = styled.ul`
    display: flex;
    gap: 52px;
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
        left: 12px; 
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