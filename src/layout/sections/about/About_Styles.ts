import styled from "styled-components";
import {font} from "../../../styles/Common";
import {Theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

const About = styled.section`
    display: flex;
    padding: 110px 0 216px;
    position: relative;

    @media ${Theme.media.mobile}{
        padding: 65px 0 94px;
    }
`


const Title = styled.p`
    ${font({weight: 700, Fmax: 48, Fmin: 28})}
    text-transform: capitalize;
`;

export const ProgressIconsWrapper = styled(FlexWrapper)`
    @media ${Theme.media.mobile} {
        justify-content: center;
    }
`

export const S = {
    About,
    Title,
}