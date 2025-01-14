import styled from "styled-components";
import {font} from "../../../styles/Common";

const Form = styled.form`
    max-width: 524px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 35px;
    
    
    textarea {
        resize: none;
        height: 155px;
        padding-top: 15px;
        ${font({weight:400, Fmax:18, Fmin:11})}
    }
`;

const Label = styled.label`
    margin-bottom: 7px;
    ${font({weight:400, Fmax:16, Fmin:11})}
`;

const Field = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 15px;
    ${font({weight:400, Fmax:18, Fmin:11})}
`;

const Navigation = styled.div`
    min-height: 500px;
    height: 100%;
    max-width: 512px;
    width: 100%;
`;

const MapContainer = styled.div`
    position: relative;
    overflow: hidden;
`;

const MapLink = styled.a`
    color: #eee;
    font-size: 12px;
    position: absolute;
    top: 0;

    &:nth-child(2) {
        top: 14px;
    }
`;

export const S = {
    Form,
    Label,
    Field,
    Navigation,
    MapContainer,
    MapLink
}