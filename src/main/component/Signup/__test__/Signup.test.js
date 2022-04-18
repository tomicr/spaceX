/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */

// import React, { lazy } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// import eventUser from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Signup from '../SignUp';

const MockSignup = function () {
  return (
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
};

// function getEmail() {
//   return screen.getByRole('textbox', {
//     email: /email/i,
//   });
// }

// function getPassword() {
//   return screen.getByRole('textbox', {
//     email: /password/i,
//   });
// }

// function getConfirmationPassword() {
//   return screen.getByRole('textbox', {
//     email: /confirmation password/i,
//   });
// }
// const promise = Promise.resolve();
// const onSubmitMock = jest.fn(() => promise);

// test('test function submit and inputs', async () => {
//   render(<MockSignup onSubmit={onSubmitMock} />);
//   eventUser.type(getEmail(), 'radatest@gmail.com');
//   eventUser.type(getPassword(), 'radatest1!');
//   eventUser.type(getConfirmationPassword(), 'radatest1!');
//   // NE RADI
//   act(() => {
//     expect(onSubmit).toHaveBeenCalled();
//   });
// });

// test('if validation messages shows', async () => {
//   render(<MockSignup onSubmit={onSubmitMock} />);
//   await waitFor(() => {
//     const email = screen.getByLabelText('Email');
//     expect(email).toHaveErrorMessage('Email is required!');
//   });
//   await waitFor(() => {
//     const pass = screen.getByLabelText('Password');
//     expect(pass).toHaveErrorMessage('Password is required!');
//   });
//   await waitFor(() => {
//     const confirmPass = screen.getByLabelText('Confirmation Password');
//     expect(confirmPass).toHaveErrorMessage(
//       'Confirmation password is required!'
//     );
//   });
// });

test('with valid inputs', async () => {
  const mockOnSubmit = jest.fn();
  render(<MockSignup onSubmit={mockOnSubmit} />);
  const inputEmail = screen.getByLabelText('Email');
  const inputPassword = screen.getByLabelText('Password');
  const inputConfPass = screen.getByLabelText('Confirmation Password');
  const button = screen.getByRole('button', { name: 'Submit' });
  await act(async () => {
    fireEvent.change(inputEmail, {
      target: { value: 'radatest@gmail.com' },
    });
    fireEvent.change(inputPassword, {
      target: { value: 'radatest1!' },
    });
    fireEvent.change(inputConfPass, {
      target: { value: 'radatest1!' },
    });
  });
  await act(async () => {
    fireEvent.click(button);
  });
  expect(mockOnSubmit).toBeCalledTimes(1);
});

test('test field input', async () => {
  render(<MockSignup />);
  const inputElement = screen.getByPlaceholderText(/enter email/i);
  await act(async () => {
    fireEvent.change(inputElement);
  });
  expect(inputElement).toBeInTheDocument();
});

test('test button name', () => {
  render(<MockSignup />);
  const buttonElement = screen.getByRole('button', { name: 'Submit' });
  expect(buttonElement).toBeInTheDocument();
});

test('test if button clicked', async () => {
  render(<MockSignup />);
  const buttonElement = screen.getByRole('button', { name: 'Submit' });
  await act(async () => {
    fireEvent.click(buttonElement);
  });

  expect(buttonElement).toBeInTheDocument();
});

test('test if button have a class', () => {
  render(<MockSignup />);
  const buttonElement = screen.getByRole('button', { name: 'Submit' });
  expect(buttonElement).toHaveClass('submit');
});
