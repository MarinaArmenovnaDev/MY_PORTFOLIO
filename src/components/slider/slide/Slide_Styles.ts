import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";


export type StarWrapperPropsType = {
    gap?: string;
    marginTop?: string;
};


const Slide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 726px;
    min-height: 394px;
    margin: 0 auto;
    border-radius: 140px 0;
    background-color: ${Theme.colors.primaryBg};

    @media ${Theme.media.mobile} {
        border-radius: 60px 0;
    }
`;


const Photo = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;

    @media ${Theme.media.mobile} {
        width: 74px;
        height: 74px;
    }
`;


const Name = styled.span`
    ${font({ family: "Poppins", weight: 600, Fmax: 24, Fmin: 18 })}
    text-align: center;
    margin-top: 20px;
`;

const Status = styled.span`
    ${font({ family: "Poppins", color: Theme.colors.accent, weight: 400, lineHeight: 1.44, Fmax: 18, Fmin: 14 })}
    text-align: center;
    margin-bottom: 20px;
`;

const Review = styled.p`
    ${font({ family: "Poppins", color: Theme.colors.secondaryFont, lineHeight: 1.44, weight: 400, Fmax: 18, Fmin: 12 })}
    text-align: center;
    max-width: 612px;

    @media ${Theme.media.mobile} {
        line-height: 2.1;
    }
`;

const StarWrapper = styled.div<StarWrapperPropsType>`
    display: flex;
    gap: ${props => props.gap || "6px"};
    margin-top: ${props => props.marginTop || "12px"};
`;

export const S = {
    Slide,
    Photo,
    Name,
    Status,
    Review,
    StarWrapper,
};