import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("renders the header", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
    expect(screen.getByRole("heading").textContent).toMatch("Plant People");
  })
  
  it("does not render cart initially", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.queryByText("Your Cart")).not.toBeInTheDocument();
  });

  it("renders the cart when the cart button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const cartButton = screen.getByRole("button");
    await user.click(cartButton); 
    expect(screen.queryByText("Your Cart")).toBeInTheDocument();
  });
});
