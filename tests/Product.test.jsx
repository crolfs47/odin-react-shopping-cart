import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Product from "../src/components/Product";
import productList from "../src/helpers/productList";

const mockProduct = productList[0];

describe("Product component", () => {
  it("renders the product image", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Product item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("img", { name: mockProduct.name })
    ).toBeInTheDocument();
  });

  it("renders the product name", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Product item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(mockProduct.name);
  });

  it("renders the product price", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Product item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    expect(screen.getByText("$" + mockProduct.price)).toBeInTheDocument();
  });

  it("renders initial quantity of 1", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Product item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("qty-input")).toHaveTextContent("1");
  });

  it("renders the add to cart button", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Product item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("button", { name: "Add to Cart" })
    ).toBeInTheDocument();
  });

  it("updates the quantity when quantity buttons are clicked", async () => {
    const mockUpdateCart = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Product item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    const increaseQtyButton = screen.getByText("+");

    await user.click(increaseQtyButton);

    expect(screen.getByTestId("qty-input")).toHaveTextContent("2");
  });

  it("does not let the quantity go below 1", async () => {
    const mockUpdateCart = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Product item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    const decreaseQtyButton = screen.getByText("-");

    await user.click(decreaseQtyButton);

    expect(screen.getByTestId("qty-input")).toHaveTextContent("1");
  });

  it("adds items to cart when add to cart button is clicked", async () => {
    const mockUpdateCart = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Product item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(addToCartButton);

    expect(mockUpdateCart).toHaveBeenCalledOnce();
  })
});

