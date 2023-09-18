import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Header component", () => {
  it("renders the correct header", () => {
    const mockSetCartOpen = vi.fn();
    render(
      <BrowserRouter>
        <Header cart={[]} cartOpen={false} setCartOpen={mockSetCartOpen} />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(/Plant People/i);
  });

  it("renders the navigation links", () => {
    const mockSetCartOpen = vi.fn();
    render(
      <BrowserRouter>
        <Header cart={[]} cartOpen={false} setCartOpen={mockSetCartOpen} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("link")).toMatch(/Home/i);
    expect(screen.getAllByRole("link")).toMatch(/Shop/i);
  });

  it("renders the number of items in the cart", () => {
    const mockSetCartOpen = vi.fn();
    render(
      <BrowserRouter>
        <Header
          cart={[
            { product: "mock", quantity: 3 },
            { product: "mock2", quantity: 2 },
          ]}
          cartOpen={false}
          setCartOpen={mockSetCartOpen}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole("button").textContent).toMatch(/5/i);
  });

  it("displays the cart when the cart button is clicked", async () => {
    const mockSetCartOpen = vi.fn();
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Header cart={[]} cartOpen={false} setCartOpen={mockSetCartOpen} />
      </BrowserRouter>
    );
    const cartButton = screen.getByRole("button");
    await user.click(cartButton);
    expect(mockSetCartOpen).toBeCalledWith(true);
  });
});