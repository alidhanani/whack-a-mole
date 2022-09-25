import { render, screen } from '@testing-library/react';
import Main from './Main';

test('Check for welcome screen', () => {
  render(<Main />);
  const linkElement = screen.getByText("Welcome");
  expect(linkElement).toBeInTheDocument();
});
