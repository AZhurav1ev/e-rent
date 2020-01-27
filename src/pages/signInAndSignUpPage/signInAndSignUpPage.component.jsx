import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { FormContainer } from './signInAndSignUpPage.style';

import SignIn from '../../components/sign-in/sign-in.component';


const signInAndSignUpPage = () => (
    <FormContainer>
        <Row>
            <Col sm={6}>
                <SignIn />
            </Col>
        </Row>
    </FormContainer>
);

export default signInAndSignUpPage;