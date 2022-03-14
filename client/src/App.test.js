import { render, screen } from "@testing-library/react";
import App from "./App";

test("Sample test", () => {
  render(<App />);
  const linkElement = screen.getByText(/Instructions/i);
  expect(linkElement).toBeInTheDocument();
});
