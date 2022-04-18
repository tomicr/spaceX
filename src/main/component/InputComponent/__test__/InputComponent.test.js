/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputComponent from '../InputComponent';

test('render input', () => {
  render(<InputComponent />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('renders input value', () => {
  render(<InputComponent />);
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '123' } });
  expect(inputElement).toHaveValue('123');
});

test('renders empty input value', () => {
  render(<InputComponent />);
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: '' } });
  expect(inputElement).toHaveValue('');
});
