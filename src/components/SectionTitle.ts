import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 80px;
    ${font({weight: 700, Fmax: 48, Fmin: 38})}

    @media ${Theme.media.tablet}{
        margin-bottom: 40px;
    }
    
`
