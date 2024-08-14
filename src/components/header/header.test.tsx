import UIHeader from "@/components/header/header";
import { ROUTE } from "@/constants/routes.constants";
import { FavHero } from "@/context/favcontext";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("UIHeader", () => {
  const mockNavigate = vi.fn();
  const favs: FavHero[] = [
    {
      id: 1,
      name: "Hero 1",
      picture: "hero1.jpg",
      description: "Description 1",
      comics: { available: 0, collectionURI: "", items: [], returned: 0 },
    },
    {
      id: 2,
      name: "Hero 2",
      picture: "hero2.jpg",
      description: "Description 2",
      comics: { available: 0, collectionURI: "", items: [], returned: 0 },
    },
  ];

  it("should render the header with the logo and UIHeart component", () => {
    render(<UIHeader navigate={mockNavigate} favs={favs} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
  });

  it("should navigate to the home route when the logo button is clicked", () => {
    render(<UIHeader navigate={mockNavigate} favs={favs} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockNavigate).toHaveBeenCalledWith(ROUTE.HOME);
  });

  it("should display the correct number of favorite heroes in UIHeart component", () => {
    render(<UIHeader navigate={mockNavigate} favs={favs} />);
    const favsText = screen.getByText("2");
    expect(favsText).toBeInTheDocument();
  });
});
