import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button.";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Get in Touch</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                    <StyledForm>
                        <Label>Your Email Address
                            <Field type={"text"} placeholder={"something@website.com"}/>
                        </Label>
                        <Label>Subject
                            <Field type={"text"} placeholder={"Question about your article"}/>
                        </Label>
                        <Field as={"textarea"} placeholder={"Your message starts with…"}/>
                        <Button>Send</Button>
                    </StyledForm>
                    <Navigation>
                        <MapContainer>
                            <MapLink href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps">
                                Минск
                            </MapLink>
                            <MapLink
                                href="https://yandex.by/maps/157/minsk/house/Zk4Ycw5iQEMAQFtpfXVycXhnbQ==/?ll=27.592967%2C53.930449&utm_medium=mapframe&utm_source=maps&z=16.85">
                                Восточная улица, 32к1 — Яндекс Карты
                            </MapLink>
                            <iframe
                                src="https://yandex.by/map-widget/v1/?ll=27.592967%2C53.930449&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY2NjI4NRJC0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0KPRgdGF0L7QtNC90Y_RjyDQstGD0LvRltGG0LAsIDMy0LoxIgoNZ77cQRXHuFdC&z=16.85"
                                width="512"
                                height="400"
                                style={{ border: "none" }}
                                allowFullScreen
                            />
                        </MapContainer>
                    </Navigation>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`;

const StyledForm = styled.form`
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