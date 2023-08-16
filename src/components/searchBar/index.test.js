import { render, screen } from '@testing-library/react';
import Search from ".";

test ('Search Bar are Rendered', () => {
  render(<Search />);
  const placeholder = screen.getByPlaceholderText(/Search all the Gifs/i);

  expect(placeholder).toBeInTheDocument();
});