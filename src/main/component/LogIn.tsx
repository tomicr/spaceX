import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import InputComponent from './InputComponent';

const LogIn = function LogIn() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [confrimPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const passwordFormat =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const emailFormat = /^\w+([.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const navigate = useNavigate();

  const login = async () => {
    if (!loginEmail.match(emailFormat)) {
      setError('');
      return setError('Invalid email format!');
    }
    if (!loginPassword.match(passwordFormat)) {
      setError('');
      return setError(
        'Password has to be at least 7 characters long and contain at least one numeric digit and a special character.'
      );
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
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
    return login;
  };

  const handleSubmitEmail = (e: any) => {
    e.preventDefault();
    setLoginEmail(e.target.value);
  };

  const handleSubmitPass = (e: any) => {
    e.preventDefault();
    setLoginPassword(e.target.value);
  };
  const handleConfirmPass = (e: any) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="logIn-wrapper">
      <p className="logIn-title">Login</p>
      <p className="text-title">Email </p>
      <InputComponent
        className="logIn-input"
        placeholder="Enter email"
        onChange={handleSubmitEmail}
      />
      <p className="text-title">Password</p>
      <InputComponent
        className="logIn-input"
        placeholder="Enter password"
        onChange={handleSubmitPass}
      />
      <p className="text-title">Confrim Password</p>
      <InputComponent
        className="logIn-input"
        placeholder="Confirm password"
        onChange={handleConfirmPass}
      />
      <button className="submit" type="submit" onClick={login}>
        Login
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
export default LogIn;
