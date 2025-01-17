import React from 'react';
import {S} from "./Slider_Styles"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Slide} from "./slide/Slide";
import review1 from "./../../assets/images/review.webp";
import review2 from "./../../assets/images/review2.png"
import review3 from "./../../assets/images/review3.png";
import './../../styles/Slider.css'


const items = [
    <Slide
        text={"“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”"}
        userName={"Adams Ademola"}
        photo={review1}
        status={"Happy Client"}
        stars={5}
    />,
    <Slide
        text={"“Draft is a revolutionary mobile app built to help you manage your business easily and save your money.”"}
        userName={"Piotr Vasnetsov"}
        photo={review2}
        status={"Satisfied Client"}
        stars={4}
    />,
    <Slide
        text={"“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”"}
        userName={"Mariya"}
        photo={review3}
        status={"Regular Client"}
        stars={5}
    />,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);



