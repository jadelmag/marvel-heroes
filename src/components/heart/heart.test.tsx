import UIHeart from "@/components/heart/heart";
import { ROUTE } from "@/constants/routes.constants";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("UIHeart", () => {
  const mockNavigate = vi.fn();
  const favs = [
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

  it("should render heart icon or disabled icon based on favs length", () => {
    render(<UIHeart favs={favs} navigate={mockNavigate} />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should call navigate function when clicked", () => {
    render(<UIHeart favs={favs} navigate={mockNavigate} />);
    fireEvent.click(screen.getByRole("menu"));
    expect(mockNavigate).toHaveBeenCalledWith(ROUTE.FAVS);
  });

  it("should call navigate function on Enter key press", () => {
    render(<UIHeart favs={favs} navigate={mockNavigate} />);

    fireEvent.keyUp(screen.getByRole("menu"), {
      key: "Enter",
      code: "Enter",
    });
    expect(mockNavigate).toHaveBeenCalledWith(ROUTE.FAVS);
  });

  it("should call navigate function on Space key press", () => {
    render(<UIHeart favs={favs} navigate={mockNavigate} />);

    fireEvent.keyUp(screen.getByRole("menu"), { key: " ", code: "Space" });

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE.FAVS);
  });

  it("should show HeartDisabledIcon", () => {
    render(<UIHeart favs={[]} navigate={mockNavigate} />);

    fireEvent.keyUp(screen.getByRole("menu"), { key: " ", code: "Space" });

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE.FAVS);
  });
});
