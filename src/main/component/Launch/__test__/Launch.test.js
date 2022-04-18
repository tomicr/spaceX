/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Launch from '../Launch';
import {
  mockLaunch,
  mockLaunchWithoutDescription,
  mockLaunchWithoutMissionPatch,
} from '../../../../mocks/mockLaunches';

const MockLaunch = function ({ launch }) {
  return (
    <BrowserRouter>
      <Launch launch={launch} />
    </BrowserRouter>
  );
};

describe('tests in case Launch compononent passed all data', () => {
  test('renders mission img small of the passed Launch component', () => {
    render(<MockLaunch launch={mockLaunch} />);
    const imgElement = screen.getByAltText(/universe/i);
    expect(imgElement.src).toContain(
      'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
    );
  });

  test('renders mission name of the passed Launch component', () => {
    render(<MockLaunch launch={mockLaunch} />);
    const titleElement = screen.getByText(/FalconSat/i);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toContainHTML('p');
  });

  test('renders year of the passed Launch component', () => {
    render(<MockLaunch launch={mockLaunch} />);
    const yearElement = screen.getByText(/2006/i);
    expect(yearElement).toBeInTheDocument();
    expect(yearElement).toContainHTML('p');
  });

  test('renders details of the passed Launch component', () => {
    render(<MockLaunch launch={mockLaunch} />);
    const detailsElement = screen.getByText(/Engine failure at 33 seconds/i);
    expect(detailsElement).toBeInTheDocument();
    expect(detailsElement).toContainHTML('p');
  });
});
test('renders no description of the passed Launch component', () => {
  render(<MockLaunch launch={mockLaunchWithoutDescription} />);
  const detailsElement = screen.getByText(/No description about this launch/i);
  expect(detailsElement).toBeInTheDocument();
  expect(detailsElement).toContainHTML('p');
});

test('test if no image renders', () => {
  render(<MockLaunch launch={mockLaunchWithoutMissionPatch} />);
  const imgElement = screen.getByAltText(/universe/i);
  expect(imgElement.src).toContain('no-image.svg.png');
});
