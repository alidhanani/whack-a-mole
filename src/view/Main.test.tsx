import { render, screen } from '@testing-library/react';
import Main from './Main';

test('Check for welcome screen', () => {
  render(<Main />);
  const linkElement = screen.getByText("Welcome");
  expect(linkElement).toBeInTheDocument();
});

test('Score', () => {
  render(<Main />);
  const linkElement = screen.getByText("Score");
  expect(linkElement).toBeInTheDocument();
});

test('Time', () => {
  render(<Main />);
  const linkElement = screen.getByText("Time");
  expect(linkElement).toBeInTheDocument();
});