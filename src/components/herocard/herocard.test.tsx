import HeroCard, { HeroCardProps } from "@/components/herocard/herocard";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("HeroCard", () => {
  const mockUpdate = vi.fn();
  const mockRedirect = vi.fn();

  const props: HeroCardProps = {
    heroId: 1,
    name: "Hero Name",
    picture: "hero.jpg",
    active: true,
    onUpdate: mockUpdate,
    onRedirect: mockRedirect,
  };

  it("should render hero card with correct details", () => {
    render(<HeroCard {...props} />);
    expect(screen.getByText("Hero Name")).toBeInTheDocument();
    expect(screen.getByAltText("Hero Name")).toHaveAttribute("src", "hero.jpg");
  });

  it("should call onRedirect when redirect button is clicked", () => {
    render(<HeroCard {...props} />);

    const button = screen.getByTestId(/description/i);

    fireEvent.click(button);

    expect(mockRedirect).toHaveBeenCalledWith(1);
  });

  it("should call onUpdate when update button is clicked", () => {
    render(<HeroCard {...props} />);
    const button = screen.getByTestId(/favorite/i);

    fireEvent.click(button);

    expect(mockUpdate).toHaveBeenCalledWith(1);
  });

  it("should handle keyboard interaction for redirect button", () => {
    render(<HeroCard {...props} />);

    const button = screen.getByTestId(/description/i);

    fireEvent.keyDown(button);

    expect(mockRedirect).toHaveBeenCalledWith(1);

    fireEvent.keyDown(button);

    expect(mockRedirect).toHaveBeenCalledWith(1);
  });
});
