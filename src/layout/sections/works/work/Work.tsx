import React from 'react';
import {S} from './Work_Styles';


type WorkPropsType = {
    src: string;
    title: string;
    description: string;
};

export const Work: React.FC<WorkPropsType> = ({src, title, description}) => {
    return (
        <S.Work>
            <figure>
                <S.WorkImage src={src} alt={title}/>
                <figcaption>
                    <S.WorkTitle>{title}</S.WorkTitle>
                    <S.WorkDescription>{description}</S.WorkDescription>
                </figcaption>
            </figure>
        </S.Work>
    );
};


