import { render, screen } from '@testing-library/react';
import Search from ".";

test ('Search Bar are Rendered', () => {
  render(<Search />);
  const placeholder = screen.getByPlaceholderText(/Search GIF/i);

  expect(placeholder).toBeInTheDocument();
});