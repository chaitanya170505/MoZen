import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../app/page";

test("renders generate button", () => {
  render(<Home />);
  
  const button = screen.getByText(/Generate Outreach Email/i);
  
  expect(button).toBeInTheDocument();
});