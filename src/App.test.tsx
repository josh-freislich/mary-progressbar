import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Progress Bars", () => {
  render(<App />);
  const linkElement = screen.getByText(/Progress Bars Demo/i);
  expect(linkElement).toBeInTheDocument();
});
