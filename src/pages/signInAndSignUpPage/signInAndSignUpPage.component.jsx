import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { FormContainer } from './signInAndSignUpPage.style';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const signInAndSignUpPage = () => (
    <FormContainer>
        <Row>
            <Col sm={6}>
                <SignIn />
            </Col>
            <Col sm={6}>
                <SignUp />
            </Col>
        </Row>
    </FormContainer>
);

export default signInAndSignUpPage;