import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Checkout from "../src/components/Checkout";
import { BrowserRouter } from "react-router-dom";

describe("Checkout component", () => {
  it("renders heading", () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      /Thank you for shopping with us!/i
    );
  });

  it("renders the paragraph text", () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    );
    expect(
      screen.getByText(
        "This is where you would check out if this was a real website."
      )
    ).toBeInTheDocument();
  });
});
