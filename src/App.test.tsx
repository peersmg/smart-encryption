import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Smart Encryption header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Smart Encryption/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders basic description', () => {
  const { getByText } = render(<App />);
  const descriptionElement = getByText(/Encryption App./i);
  expect(descriptionElement).toBeInTheDocument();
});
