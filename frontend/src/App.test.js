import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('a aplicação SAGRES inicia corretamente', () => {
  render(<App />);

  expect(document.querySelector('.App')).toBeInTheDocument();
});
