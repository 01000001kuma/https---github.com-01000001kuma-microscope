import { render, screen } from '@testing-library/react';
import { Gamemode } from './Gamemode';

test('Home renders code section', () => {
  render(<Gamemode />);
  const codeMessage = screen.getByText("src/App.tsx");
  expect(codeMessage).toBeInTheDocument();
});
