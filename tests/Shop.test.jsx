import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop";
import { BrowserRouter } from "react-router-dom";
import productList from "../src/helpers/productList";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {...actual, useOutletContext: () => [[], vi.fn()]}
});

describe("Shop component", () => {
  it("renders all products", () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    screen.debug();
    const products = screen.getAllByTestId("product-card");
    expect(products).toHaveLength(productList.length);
  });
});
