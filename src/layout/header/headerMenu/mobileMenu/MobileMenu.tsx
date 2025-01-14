import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'


export const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isOpen}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

