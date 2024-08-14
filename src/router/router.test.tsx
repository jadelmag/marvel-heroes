import { Router } from "@/router/router";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Router", () => {
  it("should render the UIHeader and routes", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("should navigate to FavsPage when route is /favs", () => {
    render(
      <MemoryRouter initialEntries={["/favs"]}>
        <Router />
      </MemoryRouter>
    );
    const title = screen.getByText(/Favorites/i);
    expect(title).toBeInTheDocument();
  });

  it("should navigate to NotFoundPage for unknown routes", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <Router />
      </MemoryRouter>
    );
    const title = screen.getByText(/404 - Page Not Found/i);
    expect(title).toBeInTheDocument();
  });
});
