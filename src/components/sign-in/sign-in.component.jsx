import React, { useState } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


const SignIn = () => {
    const [userCredentials, setCredential] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredential({
                email: '',
                password: ''
            });
        } catch (error) {
                console.log(`Error occured: ${error.message}`)
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredential({ ...userCredentials, [name]: value });
    };

    return (
        <div className='sign-in'>
            <h2 className="font-weight-light">I already have an account</h2>
            <span className="font-weight-light">Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</CustomButton>
                </div>
            </form>
        </div>
    );

}

export default SignIn;