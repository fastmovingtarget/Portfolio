import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders About Me section', () => {
  render(<HomePage />);
  const meElement = screen.getByText(/About Me/i);
  expect(meElement).toBeInTheDocument();
});
test('renders Projects section', () => {
  render(<HomePage />);
  const meElement = screen.getByText(/Current Projects/i);
  expect(meElement).toBeInTheDocument();
});