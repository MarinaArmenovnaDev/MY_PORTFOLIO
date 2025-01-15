import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";



const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 столбца
    grid-template-rows: repeat(2, auto); // 2 строки
    width: 100%;

    justify-self: center;
    text-align: center;

    @media ${Theme.media.mobile} {
        padding: 28px 0 ;
    }
`;

const GridItem = styled.div`
    padding: 20px 0;
    text-transform: uppercase;
    white-space: nowrap;

    //Стили для первых трех элементов 

    &:nth-child(-n+3) {
        ${font({weight: 700, Fmax: 48, Fmin: 12})} 
        
        @media ${Theme.media.mobile} {
        margin-bottom: 5px;
    }
    }

    //Стили для остальных элементов

    &:nth-child(n+4) {
        ${font({weight: 700, Fmax: 36, Fmin: 11})}
    }

    @media ${Theme.media.mobile} {
        padding: 0;
    }
`;

export const S = {
    GridContainer,
    GridItem,

}