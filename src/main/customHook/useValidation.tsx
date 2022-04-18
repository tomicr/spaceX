import { useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
function useValidation(values: any) {
  const [errorsEmail, setErrorsEmail] = useState('');
  const [errorsPassword, setErrorsPassword] = useState('');
  const [errorsConfirmPass, setErrorsConfirmPass] = useState('');
  const passwordFormat =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const emailFormat = /^\w+([.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.email) {
    setErrorsEmail('Email is required!');
  } else if (!values.email?.match(emailFormat)) {
    setErrorsEmail('Invalid email format!');
  } else {
    setErrorsEmail('');
  }
  if (!values.password) {
    setErrorsPassword('Password is required');
  } else if (!values.password?.match(passwordFormat)) {
    setErrorsPassword(
      // eslint-disable-next-line max-len
      'Password has to be at least 7 characters long and contain at least one numeric digit and a special character.'
    );
  } else {
    setErrorsPassword('');
  }
  if (!values.confirmationPassword) {
    setErrorsConfirmPass('Password is required');
  } else if (values.confirmationPassword !== values.password) {
    setErrorsConfirmPass('Passwords do not match');
  } else {
    setErrorsConfirmPass('');
  }
  return { errorsEmail, errorsPassword, errorsConfirmPass };
}

export default useValidation;
