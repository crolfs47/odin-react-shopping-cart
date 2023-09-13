import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";

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

  // it("does not show the cart by default", () => {
  //   const mockSetCartOpen = vi.fn();
  //   render(
  //     <BrowserRouter>
  //       <Header
  //         cart={[]}
  //         cartOpen={false}
  //         setCartOpen={mockSetCartOpen}
  //       />
  //     </BrowserRouter>
  //   );
  //   expect(screen.queryByText("Your Cart")).not.toBeInTheDocument();
  // });

  // it("shows the cart when the cart button is clicked on", async () => {
  //   const mockSetCartOpen = vi.fn();
  //   const user = userEvent.setup();
  //   render(
  //     <BrowserRouter>
  //       <Header
  //         cart={[]}
  //         cartOpen={false}
  //         setCartOpen={mockSetCartOpen}
  //       />
  //     </BrowserRouter>
  //   );
  //   const cartButton = screen.getByRole("button", { name: "cart-icon 0" });

  //   await user.click(cartButton);
  //   expect(mockSetCartOpen).toHaveBeenCalledWith(true);
  //   expect(screen.queryByText("Your Cart")).toBeInTheDocument();

  // })
});

// it does not show the cart by default

// it shows the cart when the cart button is clicked on
