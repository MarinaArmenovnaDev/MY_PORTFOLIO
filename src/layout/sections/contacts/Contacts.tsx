import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button.";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Get in Touch</SectionTitle>
                <FlexWrapper justify={'space-between'}>
                    <StyledForm>
                        <label>Your Email Address</label>
                        <Field type={"text"} placeholder={"something@website.com"} />
                        <label>Subject</label>
                        <Field type={"text"} placeholder={"Question about your article"} />
                        <Field as={"textarea"}  placeholder={"Your message starts with…"} />
                        <Button>Send</Button>
                    </StyledForm>


                    <Navigation>
                    </Navigation>
                </FlexWrapper>

            </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    height: 50vh;
`

const StyledForm = styled.form`

    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    textarea {
        resize: none;
        height: 155px;
    }

`

const Field = styled.input`
    width: 100%;

`

const Navigation = styled.div`
    outline: 1px solid blue;
    max-width: 500px;
    width: 100%;
    height: 300px;
`