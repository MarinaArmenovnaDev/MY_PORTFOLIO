import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

import {S} from './Header_Styles';
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";



export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1130;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between">
                    <S.Logo>Damadams
                        <h1>UI Designer</h1>
                    </S.Logo>
                    {width <= breakpoint? <MobileMenu/> :  <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

