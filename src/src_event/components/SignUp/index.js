import React from 'react';

import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    input_elements
} from './SignupElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Home</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <div className="form__inputs">
                                <input_elements>

                                    <FormInput type='text   ' required />

                                    <FormInput type='text' required />
                                </input_elements>
                            </div>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;
