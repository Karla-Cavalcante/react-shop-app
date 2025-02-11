import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders navigation bar', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeLink = screen.getByText(/home/i);
  const shopLink = screen.getByText(/shop/i);
  expect(homeLink).toBeInTheDocument();
  expect(shopLink).toBeInTheDocument();
});