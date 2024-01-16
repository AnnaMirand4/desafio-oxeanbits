import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tabela link', () => {
  render(<App />);
  const linkElement = screen.queryByText(/tabela/i);
  expect(linkElement).toBeInTheDocument();
});
