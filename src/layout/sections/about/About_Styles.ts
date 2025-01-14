import styled from "styled-components";
import {font} from "../../../styles/Common";
import {Theme} from "../../../styles/Theme";

const About = styled.section`
    display: flex;

`;

const Title = styled.h1`
    ${font({weight: 700, Fmax: 48, Fmin: 28})}
    text-transform: capitalize;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 64px;
    margin-bottom: 64px;

    @media ${Theme.media.mobile} {
        justify-content: center;
        align-items: center;
    }
`;
export const S = {
    About,
    Title,
    IconWrapper
}