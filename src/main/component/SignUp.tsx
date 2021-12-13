import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../firebase-config';
import InputComponent from './InputComponent';

const SignUp = function SignUp() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState('');
  const passwordFormat =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const emailFormat = /^\w+([.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  const navigate = useNavigate();

  const register = async () => {
    if (!registerEmail.match(emailFormat)) {
      setError('');
      return setError('Invalid email format!');
    }
    if (!registerPassword.match(passwordFormat)) {
      setError('');
      return setError(
        'Password has to be at least 7 characters long and contain at least one numeric digit and a special character.'
      );
    }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate('/allLaunches');
      console.log(user);
    } catch {
      const errorCode = error;
      const errorMessage = error;
      if (errorCode === 'auth/weak-password') {
        setError('The password is too weak.');
      } else {
        setError(errorMessage);
      }
    }
    return register;
  };
  return (
    <div>
      <form className="signUp-wrapper">
        <p className="signUp-title">Sign Up</p>
        <p className="text-title">Email </p>
        <InputComponent
          className="signUp-input"
          placeholder="Enter email"
          type="email"
          onChange={(event: any) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <p className="text-title">Password</p>
        <InputComponent
          placeholder="Enter password..."
          className="signUp-input"
          type="password"
          onChange={(event: any) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button className="submit" type="submit" onClick={register}>
          Submit
        </button>
        {error && <div className="error">{error}</div>}
        <div className="log-in">
          Already have an account?{' '}
          <Link to="/login">
            {' '}
            <span> Log In </span>{' '}
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
