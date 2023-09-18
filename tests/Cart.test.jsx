import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../src/components/Cart";
import { BrowserRouter } from "react-router-dom";
import productList from "../src/helpers/productList";

describe("Cart component", () => {
  it("renders the correct price for an item", () => {
    const mockUpdateCart = vi.fn();
    const mockSetCartOpen = vi.fn();
    const mockCart = [
      { product: productList[0], quantity: 3 },
      { product: productList[1], quantity: 1 },
    ];

    render(
      <BrowserRouter>
        <Cart
          cart={mockCart}
          updateCart={mockUpdateCart}
          cartOpen={true}
          setCartOpen={mockSetCartOpen}
        />
      </BrowserRouter>
    );
    const totalPrice = mockCart[0].product.price * mockCart[0].quantity;
    expect(screen.getByText("$" + totalPrice)).toBeInTheDocument();
  });

  it("renders the correct subtotal for the cart", () => {
    const mockUpdateCart = vi.fn();
    const mockSetCartOpen = vi.fn();
    const mockCart = [
      { product: productList[0], quantity: 3 },
      { product: productList[1], quantity: 1 },
    ];

    render(
      <BrowserRouter>
        <Cart
          cart={mockCart}
          updateCart={mockUpdateCart}
          cartOpen={true}
          setCartOpen={mockSetCartOpen}
        />
      </BrowserRouter>
    );

    const subTotal =
      mockCart[0].product.price * mockCart[0].quantity +
      mockCart[1].product.price * mockCart[1].quantity;
    expect(screen.getByText("$" + subTotal)).toBeInTheDocument();
  });

  it("updates the cart when the quantity buttons are clicked", async () => {
    const mockUpdateCart = vi.fn();
    const mockSetCartOpen = vi.fn();
    const mockCart = [{ product: productList[0], quantity: 3 }];
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Cart
          cart={mockCart}
          updateCart={mockUpdateCart}
          cartOpen={true}
          setCartOpen={mockSetCartOpen}
        />
      </BrowserRouter>
    );
    const increaseQtyButton = screen.getByText("+");
    await user.click(increaseQtyButton);
    expect(mockUpdateCart).toBeCalledWith([{ product: productList[0], quantity: 4 }])
  });

  it("removes item from cart when you click the remove button", async () => {
    const mockUpdateCart = vi.fn();
    const mockSetCartOpen = vi.fn();
    const mockCart = [{ product: productList[0], quantity: 3 }];
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Cart
          cart={mockCart}
          updateCart={mockUpdateCart}
          cartOpen={true}
          setCartOpen={mockSetCartOpen}
        />
      </BrowserRouter>
    );
    const removeButton = screen.getByText("REMOVE");
    await user.click(removeButton);
    expect(mockUpdateCart).toBeCalledWith([]);
  })

  it("removes item from cart when quantity is decreased to zero", async () => {
    const mockUpdateCart = vi.fn();
    const mockSetCartOpen = vi.fn();
    const mockCart = [{ product: productList[0], quantity: 1 }];
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Cart
          cart={mockCart}
          updateCart={mockUpdateCart}
          cartOpen={true}
          setCartOpen={mockSetCartOpen}
        />
      </BrowserRouter>
    );
    const decreaseQtyButton = screen.getByText("-");
    await user.click(decreaseQtyButton);
    expect(mockUpdateCart).toBeCalledWith([]);
    });

  it("resets the cart when the checkout button is clicked", async () => {
    const mockUpdateCart = vi.fn();
    const mockSetCartOpen = vi.fn();
    const mockCart = [{ product: productList[0], quantity: 3 }];
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Cart
          cart={mockCart}
          updateCart={mockUpdateCart}
          cartOpen={true}
          setCartOpen={mockSetCartOpen}
        />
      </BrowserRouter>
    );

    const checkoutButton = screen.getByText("Checkout");
    await user.click(checkoutButton);
    expect(mockUpdateCart).toBeCalledWith([]);
  })
});

