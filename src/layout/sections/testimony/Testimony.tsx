import React, {useState} from 'react';
import {Container} from "../../../components/Container";
import {S} from "./Testimony_Styles"
import {Slider} from "../../../components/slider/Slider";


export const Testimony:React.FC = () => {
    const [activeDot, setActiveDot] = useState(0);
    return (

        <S.Testimony>
            <Container>
                <Slider/>
                <S.Pagination>
                    {[0, 1, 2].map((index) => (
                        <S.PaginationDot
                            key={index}
                            active={activeDot === index}
                            onClick={() => setActiveDot(index)}
                        />
                    ))}
                </S.Pagination>
            </Container>
        </S.Testimony>
    );
};


