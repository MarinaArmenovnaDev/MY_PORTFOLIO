import React from 'react';
import {S} from './Results_Styles'

export const Results:React.FC = () => {
    return (
        <section>
            <S.GridContainer>
                <S.GridItem>81+</S.GridItem>
                <S.GridItem>97+</S.GridItem>
                <S.GridItem>50</S.GridItem>
                <S.GridItem>HAPPY CUSTOMERS</S.GridItem>
                <S.GridItem>Completed Projects</S.GridItem>
                <S.GridItem>Awards Won</S.GridItem>
            </S.GridContainer>
        </section>


    )
};


