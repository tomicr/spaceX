/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Login from '../LogIn';

const MockLoginTest = function () {
  return (
    <BrowserRouter>
      <Login />
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

// test('test field name', async () => {
//   const mockOnSubmit = jest.fn();
//   render(<MockLoginTest onSubmit={mockOnSubmit} />);
//   eventUser.type(getEmail(), 'radatest@gmail.com');
//   eventUser.type(getPassword(), 'radatest1!');
//   eventUser.type(getConfirmationPassword(), 'radatest1!');
//   userEvent.click(screen.getByRole('button', { name: /login/i }));
//   await waitFor(() => {
//     expect(onSubmit).toHaveBeenCalledWith({
//       email: 'radatest@gmail.com',
//       password: 'radatest1!',
//       confirmationPassword: 'radatest1!',
//     });
//   });
// });

// test('if validation messages shows', async () => {
//   const mockOnSubmit = jest.fn();
//   render(<MockLoginTest onSubmit={mockOnSubmit} />);
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
  render(<MockLoginTest onSubmit={mockOnSubmit} />);
  const inputEmail = screen.getByLabelText('Email');
  const inputPassword = screen.getByLabelText('Password');
  const inputConfPass = screen.getByLabelText('Confirmation Password');
  const button = screen.getByRole('button', { name: 'Login' });
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
  expect(mockOnSubmit).toHaveBeenCalled();
});

test('test field name', () => {
  render(<MockLoginTest />);
  const nameElement = screen.getByText(/email/i);
  expect(nameElement).toBeInTheDocument();
});

test('test field input', () => {
  render(<MockLoginTest />);
  const inputElement = screen.getByPlaceholderText(/enter email/i);
  fireEvent.change(inputElement);
  expect(inputElement).toBeInTheDocument();
});

test('test button name', () => {
  render(<MockLoginTest />);
  const buttonElement = screen.getByRole('button', { name: 'Login' });
  expect(buttonElement).toBeInTheDocument();
});

// test('test if button click', async () => {
//   render(<MockLoginTest />);
//   const buttonElement = screen.getByRole('button', { name: 'Login' });
//   await fireEvent.click(buttonElement);
//   expect(buttonElement).toBeInTheDocument();
// });

test('test if button have a class', () => {
  render(<MockLoginTest />);
  const buttonElement = screen.getByRole('button', { name: 'Login' });
  expect(buttonElement).toHaveClass('submit');
});
