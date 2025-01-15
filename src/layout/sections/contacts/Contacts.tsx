import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button.";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Contacts_Styles"

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Get in Touch</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                    <S.Form>
                        <S.Label>Your Email Address
                            <S.Field type={"text"} placeholder={"something@website.com"}/>
                        </S.Label>
                        <S.Label>Subject
                            <S.Field type={"text"} placeholder={"Question about your article"}/>
                        </S.Label>
                        <S.Field as={"textarea"} placeholder={"Your message starts with…"}/>
                        <Button type={"submit"}>Send</Button>
                    </S.Form>
                    <S.Navigation>
                        <S.MapContainer>
                            <S.MapLink href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps">
                                Минск
                            </S.MapLink>
                            <S.MapLink
                                href="https://yandex.by/maps/157/minsk/house/Zk4Ycw5iQEMAQFtpfXVycXhnbQ==/?ll=27.592967%2C53.930449&utm_medium=mapframe&utm_source=maps&z=16.85">
                                Восточная улица, 32к1 — Яндекс Карты
                            </S.MapLink>
                            <iframe
                                src="https://yandex.by/map-widget/v1/?ll=27.592967%2C53.930449&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY2NjI4NRJC0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0KPRgdGF0L7QtNC90Y_RjyDQstGD0LvRltGG0LAsIDMy0LoxIgoNZ77cQRXHuFdC&z=16.85"
                                width="512"
                                height="400"
                                style={{ border: "none" }}
                                allowFullScreen
                            />
                        </S.MapContainer>
                    </S.Navigation>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};



