import { render, screen } from '@testing-library/react';
import { Tiles } from './Tiles';

test('Home renders code section', () => {
  render(<Tiles />);
  const codeMessage = screen.getByText("src/App.tsx");
  expect(codeMessage).toBeInTheDocument();
});
