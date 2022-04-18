/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../Navbar';

test('render navbar', () => {
  render(<NavBar />);
});

test('logo image to contain in navbar', () => {
  render(<NavBar />);
  const imgElement = screen.getByAltText(/logo/i);
  expect(imgElement.src).toContain('logo-space.png');
});

test('checked and unchecked theme toggler', () => {
  render(<NavBar />);
  const checkElement = screen.getByTestId('switch');
  fireEvent.change(checkElement);
  expect(checkElement).toBeChecked();
});
