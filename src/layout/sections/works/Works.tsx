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
import { S } from './Works_Styles';
import { motion, useInView } from "framer-motion";

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

// Отдельный компонент для анимированного проекта
const AnimatedWork: React.FC <{
    src: string;
    title: string;
    description: string;
    index: number;
}> = ({ src, title, description, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
                delay: 0.2 * index,
                duration: 0.8,
                ease: "easeInOut"
            }}
        >
            <Work
                src={src}
                title={title}
                description={description}
            />
        </motion.div>
    );
};

export const Works: React.FC = () => {
    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>Latest work</SectionTitle>
                <FlexWrapper wrap="wrap" justify="center" gap="45px">
                    {WorksData.map((w, index) => (
                        <AnimatedWork
                            key={w.src}
                            src={w.src}
                            title={w.title}
                            description={w.description}
                            index={index}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};