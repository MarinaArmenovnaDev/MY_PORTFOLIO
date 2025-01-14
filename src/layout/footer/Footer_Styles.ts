import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";

const Footer = styled.footer`
    width: 100%;
    background-color: rgba(251, 63, 92, 0.9);
    display: flex;
    align-items: center;
    min-height: 230px;
    height: 100%;

    @media screen and (max-width: 1006px) {
        ${FlexWrapper}:first-child{
            flex-direction: column;
            margin: 50px 0;
        }
    }
    
    
    @media ${Theme.media.mobile}{
        ${FlexWrapper}:first-child  {
            margin-bottom: 75px;
        }
    }
`;

const Part = styled.div`
    display: flex;
    align-items: center; 
    gap: 18px;
    position: relative;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        right: -15px;
        width: 3px;
        height: 100%;
            background-color: ${Theme.colors.accentFont};
}

    span {
        font-weight: 500;
        font-size: 24px;
        text-transform: lowercase;
        color: ${Theme.colors.accentFont};
    }
    

    @media screen and (max-width: 1006px) {
        &:not(:last-child)::after {
            display: none;
        }
    }

    @media ${Theme.media.mobile} {
        flex-direction: column;
        gap: 5px; 
        text-align: center;
    }
`;

const SocialItem = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const S = {
    Footer,
    Part,
    SocialItem
}