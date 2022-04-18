import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import InputComponent from '../InputComponent/InputComponent';
import validationSchema from '../../validation/validationSchema';

const LogIn = function LogIn() {
  const history = useHistory();
  const { loginUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmationPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      await loginUser(values.email, values.password);
      history.push('/allLaunches');
    },
  });

  return (
    <div>
      <form className="logIn-wrapper" onSubmit={formik.handleSubmit}>
        <p className="logIn-title">Login</p>
        <label htmlFor="email" className="text-title">
          Email{' '}
        </label>
        <InputComponent
          id="email"
          name="email"
          className="logIn-input"
          placeholder="Enter email..."
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
          className="logIn-input"
          placeholder="Enter password"
          type="password"
          onChange={formik.handleChange}
          values={formik.values.email}
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
          className="logIn-input"
          placeholder="Confirm password"
          type="password"
          onChange={formik.handleChange}
          values={formik.values.email}
        />
        {formik.errors.confirmationPassword ? (
          <div id="error-pass" className="error">
            {formik.errors.confirmationPassword}
          </div>
        ) : null}
        <button className="submit" type="submit" aria-label="Login">
          Login
        </button>
      </form>
    </div>
  );
};
export default LogIn;
