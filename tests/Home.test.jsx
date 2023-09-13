import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("renders the home slogan", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      /Become a Plant Person/i
    );
  });

  it("renders the home image", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("img", {name: "home-image"})).toBeInTheDocument();
  })

  it("renders the shop plants button", () => {
    render(
      <BrowserRouter>
      <Home />
    </BrowserRouter>
    );
    expect(screen.getByRole("button").textContent).toMatch(/Shop Plants/i);
  })
});

