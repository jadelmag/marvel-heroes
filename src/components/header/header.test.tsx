import Header from "@/components/header/header";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Header Component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should render without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const button = screen.getAllByRole("button");
    const marvelButton = button[0];
    const heartButton = button[1];

    expect(marvelButton).toBeInTheDocument();
    expect(marvelButton).toHaveClass("header-icon");

    expect(heartButton).toBeInTheDocument();
  });

  it("should navigate to main route when marvel button is clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const button = screen.getAllByRole("button");
    const marvelButton = button[0];

    const mockNavigate = vi.fn();

    marvelButton.onclick = mockNavigate;
    fireEvent.click(marvelButton);

    expect(mockNavigate).toHaveBeenCalled();
  });

  it("should navigate to favs route when marvel button is clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const button = screen.getAllByRole("button");
    const heartButton = button[1];

    const mockNavigate = vi.fn();

    heartButton.onclick = mockNavigate;
    fireEvent.click(heartButton);

    expect(mockNavigate).toHaveBeenCalled();
  });
});
