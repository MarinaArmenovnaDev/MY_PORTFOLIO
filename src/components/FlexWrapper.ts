import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {ProgressIcon} from "./icon/progressIcon/ProgressIcon";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    alignItems?: string;
    wrap?: string;
    gap?: string;

    margin?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.alignItems || 'center'};
    flex-wrap: ${ props => props.wrap || 'nowrap'};
    gap: ${ props => props.gap || 'auto'};
    height: 100%;
    margin: ${props => props.margin || '0'};
    
`