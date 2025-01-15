import React from 'react';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import proj1 from '../../../assets/images/proj1.webp';
import proj2 from '../../../assets/images/proj2.webp';
import proj3 from '../../../assets/images/proj3.webp';
import proj4 from '../../../assets/images/proj4.webp';
import proj5 from '../../../assets/images/proj5.webp';
import proj6 from '../../../assets/images/proj6.webp';
import { SectionTitle } from '../../../components/SectionTitle';
import { Work } from './work/Work';
import {S} from './Works_Styles'


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


export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>Latest work</SectionTitle>
                <FlexWrapper wrap="wrap" justify="center" gap="45px">
                    {WorksData.map((w) => (
                        <Work
                            key={w.src}
                            src={w.src}
                            title={w.title}
                            description={w.description}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

