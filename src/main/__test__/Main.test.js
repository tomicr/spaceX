/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from '../Main';

const MockLaunchList = function () {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};
const queryClient = new QueryClient();
test('test if renders launch component', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MockLaunchList />
    </QueryClientProvider>
  );
  const launchComponent = await screen.findByTestId('launch');
  expect(launchComponent).toBeInTheDocument();
});
