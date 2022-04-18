/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import ThemeContextProvider from './main/contexts/ThemeContext';
import { ThemeContext } from './main/contexts/ThemeContext';

test('renders App', () => {
  render(<App />);
});

test('theme context show dark as default value', () => {
  act(() => {
    render(<App />, { wrapper: ThemeContextProvider });
  });
  const themeElement = screen.getByTestId('theme-context');
  expect(themeElement).toHaveClass('darkTheme');
});

// test('theme context show light theme', () => {
//   const wrapper = ({ children }) => (
//     <ThemeContext.Provider value={{ isDarkMode: false }}>
//       {children}
//     </ThemeContext.Provider>
//   );
//   render(<App />, { wrapper });
//   const themeElement = screen.getByTestId('theme-context');
//   expect(themeElement).toHaveClass('lightTheme');
// });
