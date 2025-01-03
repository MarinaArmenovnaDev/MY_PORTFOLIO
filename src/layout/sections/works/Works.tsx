import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import proj1 from '../../../assets/images/proj1.webp';
import proj2 from '../../../assets/images/proj2.webp';
import proj3 from '../../../assets/images/proj3.webp';
import proj4 from '../../../assets/images/proj4.webp';
import proj5 from '../../../assets/images/proj5.webp';
import proj6 from '../../../assets/images/proj6.webp';
import {SectionTitle} from '../../../components/SectionTitle';

const WorksData = [
    {
        src: proj1,
        title: 'Project title',
        description: 'UI, Art direction',
    },
    {
        src: proj2,
        title: 'Project title',
        description: 'UI, Art direction',
    },
    {
        src: proj3,
        title: 'Project title',
        description: 'UI, Art direction',
    },
    {
        src: proj4,
        title: 'Project title',
        description: 'UI, Art direction',
    },
    {
        src: proj5,
        title: 'Project title',
        description: 'UI, Art direction',
    },
    {
        src: proj6,
        title: 'Project title',
        description: 'UI, Art direction',
    },
];

export const Works = () => {
    return (

        <section>
            <Container>
                <SectionTitle> Latest work </SectionTitle>
                <FlexWrapper wrap="wrap" justify="center" gap={"45px"}>
                    {WorksData.map((w) => (
                        <Work key={w.src}>
                            <figure>
                                <WorkImage src={w.src} alt={w.title}/>
                                <figcaption>
                                    <WorkTitle>{w.title}</WorkTitle>
                                    <WorkDescription>{w.description}</WorkDescription>
                                </figcaption>
                            </figure>
                        </Work>
                    ))}
                </FlexWrapper>
            </Container>
        </section>

    );
};

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