import React from 'react';
import {S} from '../HeaderMenu_Styles'


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


export const Menu: React.FC = () => {
    return (
        <S.NavList>
            {items.map((item, index) => {
                return (
                    <S.NavItems key={index}>
                        <S.NavLink
                            activeClass="active"
                            to={item.href}
                            smooth={true}
                            spy={true}
                        >{item.title}</S.NavLink>
                    </S.NavItems>
                )
            })}
        </S.NavList>
    );
};


