import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import validationSchema from '../../validation/validationSchema';
import InputComponent from '../InputComponent/InputComponent';
import { useAuth } from '../../contexts/AuthContext';

const SignUp = function SignUp() {
  // const [registerEmail, setRegisterEmail] = useState('');
  // const [registerPassword, setRegisterPassword] = useState('');
  // const [confirmationPassword, setConfirmationPassword] = useState('');
  // const [error, setError] = useState('');
  // const [errorEmail, setErrorEmail] = useState('');
  // const [errorPass, setErrorPass] = useState('');
  // const [errorConfirmPass, setErrorConfirmPass] = useState('');
  // const [isDisabled, setIsDisabled] = useState(true);
  // const passwordFormat =
  //   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  // const emailFormat = /^\w+([.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   if (!registerEmail) {
  //     setErrorEmail('Email is required');
  //     setIsDisabled(true);
  //   } else if (!registerEmail.match(emailFormat)) {
  //     setErrorEmail('Invalid email format!');
  //     setIsDisabled(true);
  //   } else {
  //     setErrorEmail('');
  //     setIsDisabled(false);
  //   }
  //   if (!registerPassword) {
  //     setErrorPass('Password is required');
  //     setIsDisabled(true);
  //   } else if (!registerPassword.match(passwordFormat)) {
  //     setErrorPass(
  //       'Password has to be at least 7 characters long and contain at least one numeric digit and a special character.'
  //     );
  //     setIsDisabled(true);
  //   } else {
  //     setErrorPass('');
  //     setIsDisabled(false);
  //   }
  //   if (!confirmationPassword) {
  //     setErrorConfirmPass('Confirmation password is required');
  //     setIsDisabled(true);
  //   } else if (!registerPassword.match(confirmationPassword)) {
  //     setErrorConfirmPass('Passwords do not match');
  //     setIsDisabled(true);
  //   } else {
  //     setErrorConfirmPass('');
  //     setIsDisabled(false);
  //   }
  //   try {
  //     const user = await signup(registerEmail, registerPassword);
  //     history.push('/allLaunches');
  //     console.log(user);
  //   } catch {
  //     const errorCode = error;
  //     const errorMessage = error;
  //     if (errorCode === 'auth/weak-password') {
  //       setError('The password is too weak.');
  //     } else {
  //       setError(errorMessage);
  //     }
  //   }

  //   return handleSubmit;
  // };

  const history = useHistory();
  const { signup } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmationPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      await signup(values.email, values.password);
      history.push('/allLaunches');
    },
  });

  return (
    <div>
      <form className="signUp-wrapper" onSubmit={formik.handleSubmit}>
        <p className="signUp-title">Sign Up</p>
        <label htmlFor="email" className="text-title">
          Email{' '}
        </label>
        <InputComponent
          id="email"
          name="email"
          className="signUp-input"
          placeholder="Enter email"
          type="email"
          aria-label="Email"
          aria-errormessage="error-email"
          aria-invalid="true"
          onChange={formik.handleChange}
          values={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="error-email" className="error">
            {formik.errors.email}
          </div>
        ) : null}
        <label htmlFor="pass" className="text-title">
          Password{' '}
        </label>
        <InputComponent
          id="pass"
          name="password"
          placeholder="Enter password..."
          className="signUp-input"
          type="password"
          aria-label="Password"
          aria-errormessage="error-pass"
          aria-invalid="true"
          onChange={formik.handleChange}
          values={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="error-pass" className="error">
            {formik.errors.password}
          </div>
        ) : null}
        <label htmlFor="confPass" className="text-title">
          Confirmation Password{' '}
        </label>
        <InputComponent
          id="confPass"
          name="confirmationPassword"
          placeholder="Confirm password..."
          className="signUp-input"
          type="password"
          aria-label="Confirmation Password"
          aria-errormessage="error-pass"
          aria-invalid="true"
          onChange={formik.handleChange}
          values={formik.values.confirmationPassword}
        />
        {formik.errors.confirmationPassword ? (
          <div id="error-pass" className="error">
            {formik.errors.confirmationPassword}
          </div>
        ) : null}
        <button className="submit" type="submit">
          Submit
        </button>
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
