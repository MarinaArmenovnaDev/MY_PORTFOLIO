import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 80px;

    @media ${Theme.media.tablet}{
        margin-bottom: 40px;
    }
    
`
