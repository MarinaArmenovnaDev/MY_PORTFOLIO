import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {IconWrapper} from "../../../components/icon/Icon";

const Testimony = styled.section`
    display: flex;
    align-items: center;

    @media ${Theme.media.tablet} {
        ${IconWrapper}[data-iconid="quotes"] {
            width: 80px;
            top: 65px;
            left: 15%;
        }
    }

    @media ${Theme.media.mobile} {
        ${IconWrapper}[data-iconid="quotes"]{
            width: 60px;
            top: 50px;
        }
    }
`


const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 40px 0 20px;
`;

const PaginationDot = styled.div<{ active?: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.active ? Theme.colors.accent : Theme.colors.primaryBg)};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${Theme.colors.accent};
    }
`;

export const S = {
    Testimony,
    Pagination,
    PaginationDot,
}