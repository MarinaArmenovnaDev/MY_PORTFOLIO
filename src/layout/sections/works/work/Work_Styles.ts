import styled from "styled-components";

const Work = styled.div`
    margin: 10px;
`;

const WorkImage = styled.img`
    width: 330px;
    height: 330px;
    object-fit: cover;
`;

const WorkTitle = styled.h3`
    margin: 25px 0 10px;
    font-weight: 600;
    font-size: 20px;
    color: #2d2d2d;
`;

const WorkDescription = styled.p`
    font-weight: 400;
    font-size: 17px;
    color: #2d2d2d;
`;

export const S ={
    Work,
    WorkImage,
    WorkTitle,
    WorkDescription
}