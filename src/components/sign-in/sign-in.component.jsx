import React, { useState } from 'react';
import './sign-in.styles.scss';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, signInWithGoogle } from './../../firebase.utils';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = userCredentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };
  const { email, password } = userCredentials;
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          required
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
