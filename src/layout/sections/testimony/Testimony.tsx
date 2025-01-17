import {Container} from "../../../components/Container";
import {S} from "./Testimony_Styles"
import {Slider} from "../../../components/slider/Slider";


export const Testimony: React.FC = () => {
    return (

        <S.Testimony id={"testimonials"}>
            <Container>
                <Slider/>
            </Container>
        </S.Testimony>
    );
};


