import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const SignIn = () => {
    const [userCredentials, setCredential] = useState({ 
        email: '', 
        password: '' 
    });
    const { email, password } = userCredentials;

    const handleSubmit = event => {
        event.preventDefault();
        setCredential({ 
            email: '', 
            password: ''
        });
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredential({ ...userCredentials, [name]: value });
    };

    return (
        <div className='sign-in'>
            <h2 className="h2 font-weight-light">I already have an account</h2>
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
                    value={ password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    );

}

export default SignIn;