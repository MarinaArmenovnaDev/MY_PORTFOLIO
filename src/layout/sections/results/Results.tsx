import React from 'react';
import styled from "styled-components";

export const Results = () => {
    return (
        <StyledResult>
            <GridContainer>
                <GridItem>81+</GridItem>
                <GridItem>97+</GridItem>
                <GridItem>50</GridItem>
                <GridItem>HAPPY CUSTOMERS</GridItem>
                <GridItem>Completed Projects</GridItem>
                <GridItem>Awards Won</GridItem>
            </GridContainer>
        </StyledResult>


    )
};

const StyledResult = styled.section`
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 столбца
    grid-template-rows: repeat(2, auto); // 2 строки
    width: 100%;
    max-width: 1170px;
    
    justify-self: center;
    text-align: center;
    align-items: center;
    border: 1px solid red;
`;

const GridItem = styled.div`
  padding: 20px 0;
  font-size: 24px;
  font-weight: bold;
`;

