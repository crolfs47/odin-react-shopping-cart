import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../src/components/ErrorPage";
import { BrowserRouter } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useRouteError: () => "error" };
});

describe("ErrorPage component", () => {
  it("renders heading", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(/Oops!/i);
  });

  it("renders paragraph", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
  });

  it("renders link back to home page", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(
      screen.getByText(
        "You can go back to the home page by clicking here, though!"
      )
    ).toBeInTheDocument();
  });
});
