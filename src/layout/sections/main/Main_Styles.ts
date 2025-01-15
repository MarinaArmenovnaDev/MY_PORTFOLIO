import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
    height: 100vh;
    display: flex;
    background-color: ${Theme.colors.primaryBg};
    padding-bottom: 110px;
    
    @media ${Theme.media.desktop}{
        height: max-content;
    }
    
    @media ${Theme.media.mobile} {
        padding-bottom: 65px;
    }
    
`;

const SmallText = styled.p`
    ${font({ weight: 400, Fmax: 28, Fmin: 18 })}
`;

const Name = styled.p`
    ${font({ weight: 700, Fmax: 50, Fmin: 32 })} 
    text-transform: capitalize;
   

    span {
        color: ${Theme.colors.accent};
    }
`;

export const S ={
    Main,
    SmallText,
    Name
}

