import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Link} from "react-scroll";


//menu
const NavList = styled.ul`
    display: flex;
    gap: 52px;
`
const NavItems = styled.li`
    cursor: pointer;
`

const NavLink = styled(Link)`
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

    &:hover::after,&.active::after {
        opacity: 1;
    }
`


// MobileMenu
const MobileMenu = styled.nav`
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

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(251, 63, 92, 0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.8s ease-in-out;

    ${NavList} {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: 1s ease-in-out;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
        & ${NavList} {
            gap: 50px;
        }
    `}
`

//DesktopMenu
const DesktopMenu = styled.nav`
`




export const S = {
    NavList,
    NavItems,
    NavLink,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu

}