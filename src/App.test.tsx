import { render, screen } from '@testing-library/react';
import App from './App';

test('Check for welcome screen', () => {
  render(<App />);
  const linkElement = screen.getByText("Welcome");
  expect(linkElement).toBeInTheDocument();
});
